import { useNavigation } from '@react-navigation/native';
import React from 'react';
import imageHome from '../../assets/home.jpg';
import Ciclo from '../../components/Ciclo';
import MetaHome from '../../components/MetaHome';
import TrainneWeak from '../../components/TrainneWeak';
import UserLogged from '../../components/UserLogged';
import { Container, Fundo } from './styles';


const Home = () => {
  const navigation = useNavigation();
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
