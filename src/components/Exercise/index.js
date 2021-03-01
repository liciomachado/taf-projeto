import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Container, BoxImage } from './styles';

import abdominal from '../../assets/abdominal.png'
import barra from '../../assets/barra.png'
import flexao from '../../assets/flexao.png'
import corrida from '../../assets/corrida.png'

export default function Exercises() {
  return (
    <Container>
      <Container.Box>
        <BoxImage resizeMode="contain"
          source={flexao}
        />
        <Text>Flexão de Braços</Text>
        <Text>Estipulado: 40</Text>
        <TextInput placeholder="Executado:" style={styles.input} />
      </Container.Box>

      <Container.Box>
        <BoxImage resizeMode="contain"
          source={abdominal}
        />
        <Text>Abdominal</Text>
        <Text>Estipulado: 70</Text>
        <TextInput placeholder="Executado:" style={styles.input} />
      </Container.Box>

      <Container.Box>
        <BoxImage resizeMode="contain"
          source={barra}
        />
        <Text>Flexão na Barra</Text>
        <Text>Estipulado: 11</Text>
        <TextInput placeholder="Executado:" style={styles.input} />
      </Container.Box>

      <Container.Box>
        <BoxImage resizeMode="contain"
          source={corrida}
        />
        <Text>Corrida</Text>
        <Text>Estipulado: 3100</Text>
        <TextInput placeholder="Executado:" style={styles.input} />
      </Container.Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '85%',
    borderColor: '#000',
    borderWidth: 3,
    textAlign: 'center',
  }
})
