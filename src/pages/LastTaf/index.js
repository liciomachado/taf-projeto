import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ExercicioService from '../../services/exercicioService';

import UserLogged from '../../components/UserLogged';
import { Container, Inputs, TextTaf, SubText } from './styles';
import { useAuth } from '../../contexts/auth';

export default function LastTaf({ navigation }) {
  const { updateUserIndiceTaf } = useAuth();
  const exercicioService = new ExercicioService();
  const [flexao, setFlexao] = useState('40');
  const [abdominal, setAbdominal] = useState('69');
  const [barra, setBarra] = useState('11');
  const [corrida, setCorrida] = useState('3050');

  function submitTaf({ route }) {
    exercicioService.exercicioRealizado({ flexao, abdominal, barra, corrida }).then((res) => {
      Alert.alert("Sucesso", "Dados salvos com sucesso!");
      navigation.push('Home')
      updateUserIndiceTaf(res.data.resultadoFinal);
    })
  }

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
            <TextTaf>Defina seu ultimo Teste Fisico</TextTaf>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Corrida 12min" value={corrida} onChangeText={e => setCorrida(e)} />
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Flexão de braços" value={flexao} onChangeText={e => setFlexao(e)} />
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Abdominal" value={abdominal} onChangeText={e => setAbdominal(e)} />
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Flexão de braços em barra fixa" value={barra} onChangeText={e => setBarra(e)} />
            <SubText>Defina com a máxima precisão possivel para maior eficacia de parametro dos exercícios.</SubText>
          </Inputs>
          <TouchableOpacity style={styles.button} onPress={submitTaf}>
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
    marginRight: '10%',
    marginBottom: '10%'
  }
})