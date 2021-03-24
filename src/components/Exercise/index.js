import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Container, BoxImage } from './styles';

import abdominalImg from '../../assets/abdominal.png';
import flexaoImg from '../../assets/flexao.png';
import barraImg from '../../assets/barra.png';
import corridaImg from '../../assets/corrida.png';
import api from '../../services/exercicioService';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Exercises({ onClickModal }) {
  const navigation = useNavigation();
  const exercicioService = new api();

  const [flexao, setFlexao] = useState('40');
  const [abdominal, setAbdominal] = useState('69');
  const [barra, setBarra] = useState('11');
  const [corrida, setCorrida] = useState('3050');
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(!isLoading);
    }, 500);
  }, [])

  function onsubmit() {
    exercicioService.exercicioRealizado({ flexao, abdominal, barra, corrida }).then(response => {
      navigation.navigate('FinishRun', { resp: response.data })
    });
  }

  return (
    <>
      <Spinner
        visible={isLoading}
        textContent={'Carregando...'}
        textStyle={styles.spinnerTextStyle}
        customIndicator={<ActivityIndicator color="#00ff00" size="large"/>}
      />
      <Container>
        {/* MUDAR FORMA DE VER 2 X 2  */}
        <Container.Box>
          <TouchableOpacity onPress={() => onClickModal(0)} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={flexaoImg}
            />
            <Text>Flexão de Braços</Text>
            <Text>Estipulado: 40</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={flexao} onChangeText={e => setFlexao(e)} keyboardType='number-pad' />
          </TouchableOpacity>
        </Container.Box>
        <Container.Box>
          <TouchableOpacity onPress={() => onClickModal(1)} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={abdominalImg}
            />
            <Text>Abdominal</Text>
            <Text>Estipulado: 70</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={abdominal} onChangeText={e => setAbdominal(e)} keyboardType='number-pad' />
          </TouchableOpacity>
        </Container.Box>

        <Container.Box>
          <TouchableOpacity onPress={() => onClickModal(2)} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={barraImg}
            />
            <Text>Flexão na Barra</Text>
            <Text>Estipulado: 11</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={barra} onChangeText={e => setBarra(e)} keyboardType='number-pad' />
          </TouchableOpacity>
        </Container.Box>

        <Container.Box>
          <TouchableOpacity onPress={() => onClickModal(3)} style={{ alignItems: 'center' }}>
            <Image resizeMode="contain"
              style={styles.img}
              source={corridaImg}
            />
            <Text>Corrida</Text>
            <Text>Estipulado: 3100</Text>
            <TextInput placeholder="Executado:" style={styles.input} value={corrida} onChangeText={e => setCorrida(e)} keyboardType='number-pad' />
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
  },
  spinnerTextStyle: {
    color: '#FFF'
  }
})
