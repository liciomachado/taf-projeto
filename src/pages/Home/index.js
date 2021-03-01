import React from 'react';
import { Container, Fundo } from './styles';
import imageHome from '../../assets/home.jpg'

import UserLogged from '../../components/UserLogged';
import MetaHome from '../../components/MetaHome';
import Ciclo from '../../components/Ciclo';
import TrainneWeak from '../../components/TrainneWeak';

const Home = () => {

  return (
    <Fundo source={imageHome} >
      <Container>

        <UserLogged />
        <MetaHome />
        <Ciclo />
        <TrainneWeak />
      </Container>
    </Fundo>
  );
};

export default Home;
