import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import UserLogged from '../../components/UserLogged';

import { Container, Inputs, TextTaf,SubText } from './styles';

export default function LastTaf() {
  return (
    <Container>
      <UserLogged cor='black' />
      <ScrollView contentContainerStyle={styles.content} scrollEnabled={false} >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          style={styles.content}
        >
          <Inputs>
            <TextTaf>Defina seu ultimo TAF</TextTaf>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Corrida 12min" />
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Flexão de braços" />
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Abdominal" />
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Flexão de braços em barra fixa" />
            <SubText>Defina com a máxima precisão possivel para maior eficacia dos parametros dos exercícios.</SubText>
          </Inputs>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>CONFIRMAR</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
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