import React from 'react';

import UserLogged from '../../components/UserLogged';
import WeaksResults from '../../components/WeaksResults';

import { Container } from './styles';

export default function Results() {
  return (
    <Container>
      <UserLogged  cor='black'/>
      <WeaksResults />
      
    </Container>
  );
};
