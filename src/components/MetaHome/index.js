import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, TextHome } from './styles';
import { useNavigation } from '@react-navigation/native';

const MetaHome = () => {
  const navigation = useNavigation();

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
    </Container>
  );
};

export default MetaHome;
