import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text'
import { TextInput } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';
import UsuarioService from '../../services/usuarioService';

import { Container } from './styles';

export default function AccountConfig() {
  const usuarioService = new UsuarioService();
  const { user, changeUser } = useAuth();

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [generoChar, setGeneroChar] = useState('');
  const [mostraNovaSenha, setMostraNovaSenha] = useState(false);
  const [novaSenha, setNovaSenha] = useState('');

  useEffect(() => {
    setId(user.id);
    setEmail(user.email);
    setNome(user.nome);
    setNascimento(user.nascimento);
    user.genero == "MASCULINO" ? setGeneroChar('M') : setGeneroChar('F');

  }, [])

  function salvarAlteracoes() {
    if (senha == novaSenha) {
      var genero = generoChar == 'M' ? "MASCULINO" : "FEMININO";
      usuarioService.changeUser({ id, email, senha, nome, nascimento, genero }).then((res) => {
        Alert.alert("Sucesso", "Usuario alterado com sucesso!");
        changeUser({ id, email, nome, nascimento, genero })
      }).catch((error) => {
        Alert.alert("Erro", error);
        console.log(error)
      })
    } else {
      Alert.alert("Erro", "As senhas devem ser iguais");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.content} scrollEnabled={true} >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        style={styles.content}
      >
        <Container>
          <TextInput label="Nome" value={nome} onChangeText={e => setNome(e)} style={{ backgroundColor: 'transparent' }}
            theme={{ colors: { primary: '#76AFCD', underlineColor: 'transparent' } }} />
          <TextInput
            label="Data de nascimento"
            value={nascimento}
            onChangeText={text => {
              setNascimento(text)
            }}
            theme={{ colors: { primary: '#76AFCD', underlineColor: 'transparent' } }}
            style={{ backgroundColor: 'transparent' }}
            render={props =>
              <TextInputMask
                {...props}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}

              />
            }
          />
          <TextInput label="Gênero (M / F)" value={generoChar} onChangeText={e => setGeneroChar(e.toUpperCase())}
            theme={{ colors: { primary: '#76AFCD', underlineColor: 'transparent' } }}
            maxLength={1} style={{ backgroundColor: 'transparent' }} />
          <TextInput label="Email" value={email} onChangeText={e => setEmail(e)}
            theme={{ colors: { primary: '#76AFCD', underlineColor: 'transparent' } }}
            style={{ backgroundColor: 'transparent' }} />
          <TextInput label="Senha" value={senha} onChangeText={e => setSenha(e)}
            onChange={() => setMostraNovaSenha(true)}
            theme={{ colors: { primary: '#76AFCD', underlineColor: 'transparent' } }}
            style={{ backgroundColor: 'transparent' }} secureTextEntry={true} />

          {mostraNovaSenha &&
            <TextInput label="Repita a nova Senha" value={novaSenha} onChangeText={e => setNovaSenha(e)}
              theme={{ colors: { primary: '#76AFCD', underlineColor: 'transparent' } }}
              style={{ backgroundColor: 'transparent' }} secureTextEntry={true} />
          }
          <TouchableOpacity style={styles.button} onPress={salvarAlteracoes}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SALVAR</Text>
          </TouchableOpacity>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: "#000",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    textAlign: 'left',
  },
  label: {
    textAlign: 'left',
  },
  button: {
    width: '80%',
    backgroundColor: '#3FC745',
    borderRadius: 3,
    margin: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  }
})
