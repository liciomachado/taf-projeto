import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, Platform, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import backgroundEB from '../../assets/backgroundEB.jpeg'
import { Container, Fundo, NameAplication, Inputs } from './styles';
import { TextInputMask } from 'react-native-masked-text'
import { useAuth } from '../../contexts/auth'
import UsuarioService from '../../services/usuarioService';

export default function Login({ navigation }) {
  const usuarioService = new UsuarioService();
  const { signIn } = useAuth();

  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState('licio.machado@hotmail.com');
  const [senha, setSenha] = useState('123321');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  //GENERO PEGANDO CHAR M / F
  const [generoChar, setGeneroChar] = useState('');

  function SignUp() {
    if (generoChar == 'M' || generoChar == 'F') {
      var genero = generoChar == 'M' ? "MASCULINO" : "FEMININO";
      usuarioService.NewUser({ email, senha, nome, nascimento, genero }).then((res) => {
        Alert.alert("Sucesso", "Usuario cadastrado com sucesso!");
        signIn({email, senha});
      }).catch((error) => {
        Alert.alert("Erro", error);
        console.log(error)
      })
    }
    else {
      Alert.alert("Genero não Definido", `Por favor, defina Genero por${"\n"} M -> masculino,${"\n"}F -> feminino`);
    }
  }

  return (
    <Fundo source={backgroundEB} >
      <ScrollView contentContainerStyle={styles.content} scrollEnabled={isRegister} >
        <Container>
          <NameAplication>Treinamento{"\n"} Físico{"\n"} Militar</NameAplication>
        </Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          style={styles.content}
        >
          <Inputs>
            {isRegister &&
              <>
                <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={e => setNome(e)} />
                <TextInputMask
                  type={'datetime'}
                  value={nascimento}
                  placeholder="01/01/0001"
                  options={{
                    format: 'DD/MM/YYYY'
                  }}
                  onChangeText={text => {
                    setNascimento(text)
                  }}
                  style={styles.input}
                />
                <TextInput style={styles.input} placeholder="Gênero (M / F)" value={generoChar} onChangeText={e => setGeneroChar(e.toUpperCase())} maxLength={1} />
              </>
            }
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={e => setEmail(e)} />
            <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={e => setSenha(e)} />
          </Inputs>

          {!isRegister
            ? <TouchableOpacity style={styles.button} onPress={() => signIn({ email, senha })}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>LOGAR</Text>
            </TouchableOpacity>
            : <TouchableOpacity style={styles.button} onPress={SignUp}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>PRÓXIMO</Text>
            </TouchableOpacity>}
          {!isRegister
            ? <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}
              onPress={() => setIsRegister(!isRegister)}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>REGISTRAR-SE</Text>
            </TouchableOpacity>
            : <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}
              onPress={() => setIsRegister(!isRegister)}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>VOLTAR</Text>
            </TouchableOpacity>}

        </KeyboardAvoidingView>
      </ScrollView>
    </Fundo>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderColor: "#000",
    borderWidth: 2,
    margin: 5,
    paddingVertical: 15,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#2D6D30',
    borderRadius: 3,
    margin: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%'
  }
})