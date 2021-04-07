import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, TextWeakCicle, Content, ButtonWeak, Text } from './styles';
import ExercicioService from '../../services/exercicioService';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TrainneWeak = ({ cor }) => {
  const exercicioService = new ExercicioService();
  const navigation = useNavigation();
  const [semanas, setsemanas] = useState([]);

  useEffect(() => {
    exercicioService.getSemanasConcluidas().then(res => {
      setsemanas(res.data);
    });
  }, []);

  const renderSemanas = ({ item }) => {
    return (
      <TouchableOpacity style={[{ backgroundColor: item.concluido ? "#3FC745" : "rgba(0,0,0,0.4)" }, styles.semanas]} onPress={() => navigation.navigate('WeakResults', { semana: item.semana })}>
        <Text>{item.semana < 10 ? `0${item.semana}` :item.semana}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Container>
      <TextWeakCicle style={{ color: cor || 'white' }}>SEMANA DE CICLO</TextWeakCicle>
      <Content>
        <FlatList
          style={styles.semanas}
          horizontal={true}
          centerContent={true}
          data={semanas}
          renderItem={renderSemanas}
          keyExtractor={item => `${item.semana}`}
        />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  semanas: {

    padding: 4,
    borderRadius: 10,
    margin: 2
  }
})

export default TrainneWeak;
