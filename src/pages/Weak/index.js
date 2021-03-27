import React from 'react';

import { Text, View } from 'react-native';
import UserLogged from '../../components/UserLogged';

import { Container, Colunas, TextWeak } from './styles';

export default function Weak() {
  return (
    <Container>
      <UserLogged cor='black' />

      <Container.Principal>
        <TextWeak>Semana ##</TextWeak>
      </Container.Principal>

      <Colunas style={{ marginLeft: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Dia</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Flexão</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Corrida</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Abdominal</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Barra</Text>
      </Colunas>
      <Colunas>
        <Text>01</Text>
        <Text style={{ marginLeft: -10 }}>X</Text>
        <Text>V</Text>
        <Text style={{ marginLeft: 15 }}>X</Text>
        <Text style={{ marginLeft: 15 }}>V</Text>
      </Colunas>

    </Container>
  );
};