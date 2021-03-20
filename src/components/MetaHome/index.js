import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, TextHome, TextTaf } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

const MetaHome = () => {
  const navigation = useNavigation();
  const { indiceTaf } = useAuth();

  useEffect(() => {
    console.log(indiceTaf)
  }, [])

  return (
    <Container>
      <TextHome>Não esqueça do aquecimento!</TextHome>
      <Text>{"\n"}  </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Heating', { tipoExercicio: 1 })}>
        <TextHome>Dinamico</TextHome>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Heating', { tipoExercicio: 2 })}>
        <TextHome>Estático</TextHome>
      </TouchableOpacity>
      {indiceTaf
        ? <></>
        : <TouchableOpacity onPress={() => navigation.navigate('LastTaf')}>
          <TextTaf>Defina seu ultimo Taf</TextTaf>
        </TouchableOpacity>}
    </Container>
  );
};

export default MetaHome;
