import React from 'react';
import { useAuth } from '../../contexts/auth';

import { Container, TextLastTrainne } from './styles';

const Ciclo = () => {
  const { user } = useAuth();

  return (
    <Container>
      <TextLastTrainne>Ultimo Treino</TextLastTrainne>
      <TextLastTrainne>{user.dataUltimoExercicio}</TextLastTrainne>
    </Container>
  );
};

export default Ciclo;
