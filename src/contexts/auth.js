import React, { createContext, useState, useEffect, useContext } from 'react'
import * as auth from '../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UsuarioService from '../services/usuarioService'
import axios from 'axios'
import { Alert } from 'react-native'

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {
    const usuarioService = new UsuarioService();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storagedUser && storagedToken) {
                usuarioService.apiurl.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                //httpClient.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                setUser(storagedUser);
                setLoading(false);
            } else {
                setLoading(false);
            }
        }

        loadStoragedData();
    }, []);

    async function signIn(usuario) {
        let response;
        usuarioService.authUser(usuario)
        //axios.post('http://10.0.0.103/api/usuario/auth', usuario)
        .then(resp => {
            response = resp.data;

            setUser(response);
            //httpClient.defaults.headers['Authorization'] = `Bearer ${response.token}`;
            usuarioService.apiurl.defaults.headers['Authorization'] = `Bearer ${response.token}`;

            AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response));
            AsyncStorage.setItem('@RNAuth:token', response.token);
        }).catch((err) =>{
            Alert.alert("Erro", "Usuario ou senha incorreta")
        });
        //const response = await auth.signIn();
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}