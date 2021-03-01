import React from 'react';

import { Text } from 'react-native';

import { Container, TextHome } from './styles';

const MetaHome = () => {
  return (
    <Container>
      <TextHome>Indíce atual:</TextHome>
      <TextHome>Muito Bom</TextHome>
      <Text>{"\n"}  </Text>
      <TextHome>Meta:</TextHome>
      <TextHome>Excelente</TextHome>
    </Container>
  );
};

export default MetaHome;
