import React, { useEffect, useState } from 'react';

import { FlatList, Text, View } from 'react-native';
import UserLogged from '../../components/UserLogged';
import ExercicioService from '../../services/exercicioService';
import { FontAwesome } from '@expo/vector-icons'

import { Container, Colunas, TextWeak } from './styles';

export default function Weak({ route }) {
  const exercicioService = new ExercicioService();
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    exercicioService.getSemanaDeExercicio(route.params.semana).then(res => {
      setExercicios(res.data);
    })
  }, [])

  const linhas = ({ item }) => {
    return (
      <Colunas>
        <Text style={{ marginLeft: -10, fontWeight: 'bold' }}>{item.diaSemana}</Text>

        {!!item.flexao
          ? <FontAwesome style={{ marginLeft: -10 }} name="check" size={24} color="green" />
          : <FontAwesome style={{ marginLeft: -10 }} name="close" size={24} color="transparent" />}

        {!!item.corrida
          ? <FontAwesome  name="check" size={24} color="green" />
          : <FontAwesome  name="close" size={24} color="transparent" />}
        {/* <Text>{item.corrida}</Text> */}

        {!!item.abdominal
          ? <FontAwesome style={{ marginLeft: 10 }} name="check" size={24} color="green" />
          : <FontAwesome style={{ marginLeft: 10 }} name="close" size={24} color="transparent" />}

        {!!item.barra
          ? <FontAwesome style={{ marginLeft: 10 }} name="check" size={24} color="green" />
          : <FontAwesome style={{ marginLeft: 10 }} name="close" size={24} color="transparent" />}
      </Colunas>
    )
  }

  return (
    <Container>
      <UserLogged cor='black' />

      <Container.Principal>
        <TextWeak>Semana {route.params.semana}</TextWeak>
      </Container.Principal>

      <Colunas>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Dia</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Flexão</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Corrida</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Abdominal</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Barra</Text>
      </Colunas>
      <FlatList
        data={exercicios}
        renderItem={linhas}
        keyExtractor={item => `${item.diaSemana}`}
      />

    </Container>
  );
};