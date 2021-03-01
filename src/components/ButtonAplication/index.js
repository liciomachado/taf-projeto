import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Button } from './styles';

const ButtonAplication = ({ color, text, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button style={{ backgroundColor: color }} onPress={() => navigation.navigate(navigateTo)}>
        <Button.Text>{text}</Button.Text>
      </Button>
    </Container>
  );
};

export default ButtonAplication;
