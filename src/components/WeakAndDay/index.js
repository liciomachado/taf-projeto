import React from 'react';


import { Container, TextWeak } from './styles';

const WeakAndDay = ({semana, dia}) => {

  return (
    <Container>
      <TextWeak>Semana {semana}</TextWeak>
      <TextWeak.day>Dia 0{dia}</TextWeak.day>
    </Container>
  );
};

export default WeakAndDay;
