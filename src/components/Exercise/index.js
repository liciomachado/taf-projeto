import React, { useState } from 'react';

import { Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Container, BoxImage } from './styles';

import abdominalImg from '../../assets/abdominal.png';
import flexaoImg from '../../assets/flexao.png';
import barraImg from '../../assets/barra.png';
import corridaImg from '../../assets/corrida.png';

export default function Exercises({ onClickModal, navigation }) {
  const [flexao, setFlexao] = useState('');
  const [abdominal, setAbdominal] = useState('');
  const [barra, setBarra] = useState('');
  const [corrida, setCorrida] = useState('');

  function onsubmit() {
    navigation.navigate('FinishRun');
  }

  return (
    <>
      <Container>
        {/* MUDAR FORMA DE VER 2 X 2  */}
        <Container.Box>
          <TouchableOpacity onPress={onClickModal} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={flexaoImg}
            />
            <Text>Flexão de Braços</Text>
            <Text>Estipulado: 40</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={flexao} onChangeText={e => setFlexao(e)} keyboardType='numeric' />
          </TouchableOpacity>
        </Container.Box>
        <Container.Box>
          <TouchableOpacity onPress={onClickModal} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={abdominalImg}
            />
            <Text>Abdominal</Text>
            <Text>Estipulado: 70</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={abdominal} onChangeText={e => setAbdominal(e)} keyboardType='numeric' />
          </TouchableOpacity>
        </Container.Box>

        <Container.Box>
          <TouchableOpacity onPress={onClickModal} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={barraImg}
            />
            <Text>Flexão na Barra</Text>
            <Text>Estipulado: 11</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={barra} onChangeText={e => setBarra(e)} keyboardType='numeric' />
          </TouchableOpacity>
        </Container.Box>

        <Container.Box>
          <TouchableOpacity onPress={onClickModal} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={corridaImg}
            />
            <Text>Corrida</Text>
            <Text>Estipulado: 3100</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={corrida} onChangeText={e => setCorrida(e)} keyboardType='numeric' />
          </TouchableOpacity>
        </Container.Box>
      </Container>
      <TouchableOpacity style={styles.button} onPress={onsubmit}>
        <Text style={{ color: 'white' }}>CONCLUIR ATIVIDADE</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '85%',
    borderColor: '#000',
    borderWidth: 3,
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3FC745',
    paddingHorizontal: 80,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  }
})
