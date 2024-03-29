import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UsuarioService from '../services/usuarioService'
import { Alert } from 'react-native'

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {
    const usuarioService = new UsuarioService();

    const [user, setUser] = useState(null);
    const [indiceTaf, setIndiceTaf] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
            const storagedIndiceTaf = await AsyncStorage.getItem('@RNAuth:indiceTaf');


            if (storagedUser && storagedToken) {
                usuarioService.apiurl.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                //httpClient.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser));
                setIndiceTaf(JSON.stringify(storagedIndiceTaf));
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
            .then(resp => {
                response = resp.data;
                setIndiceTaf(resp.data.indiceTaf);
                setUser(response);
                usuarioService.apiurl.defaults.headers['Authorization'] = `Bearer ${response.token}`;

                AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response));
                AsyncStorage.setItem('@RNAuth:token', response.token);
                AsyncStorage.setItem('@RNAuth:indiceTaf', resp.data.indiceTaf);
            }).catch((err) => {
                Alert.alert("Erro", "Usuario ou senha incorreta")
            });
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        }) 
    }
    function updateUserIndiceTaf(indice) {
        let usuario = user;
        usuario.indiceTaf = indice;
        setUser(usuario);
        setIndiceTaf(indice);
        AsyncStorage.setItem('@RNAuth:user', JSON.stringify(usuario));
    }

    function changeUser(userChanged) {
        let usuario = user;
        usuario.nome = userChanged.nome;
        usuario.email = userChanged.email;
        usuario.nascimento = userChanged.nascimento;
        usuario.genero = userChanged.genero;
        setUser(usuario);
        AsyncStorage.setItem('@RNAuth:user', JSON.stringify(usuario));
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, indiceTaf: !!indiceTaf, signIn, signOut, updateUserIndiceTaf, changeUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}