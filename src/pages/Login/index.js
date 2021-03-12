import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import backgroundEB from '../../assets/backgroundEB.jpeg'
import { Container, Fundo, NameAplication, Inputs } from './styles';
import { TextInputMask } from 'react-native-masked-text'
import { useAuth } from '../../contexts/auth'

export default function Login({ navigation }) {
  const { signIn } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [date, setDate] = useState('');

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
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Graduação" />
                <TextInputMask
                  type={'datetime'}
                  value={date}
                  placeholder="01/01/0001"
                  options={{
                    format: 'DD/MM/YYYY'
                  }}
                  onChangeText={text => {
                    setDate(text)
                  }}
                  style={styles.input}
                />
                <TextInput style={styles.input} placeholder="Gênero (M / F)" />
              </>
            }
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" />
          </Inputs>

          {!isRegister
            ? <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>LOGAR</Text>
            </TouchableOpacity>
            : <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LastTaf')}>
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