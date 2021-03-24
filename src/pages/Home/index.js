import React, { useEffect } from 'react';
import imageHome from '../../assets/home.jpg';
import Ciclo from '../../components/Ciclo';
import MetaHome from '../../components/MetaHome';
import TrainneWeak from '../../components/TrainneWeak';
import UserLogged from '../../components/UserLogged';
import { Container, Fundo } from './styles';
import { useAuth } from '../../contexts/auth';


const Home = ({ navigation }) => {
  const { user } = useAuth();

  useEffect(() => {
    if (user.indiceTaf == null) {
      navigation.navigate('LastTaf');
    }
  })

  useEffect(() => {

  }, [user])

  return (
    <Fundo source={imageHome} >
      <Container>
        <UserLogged />

        <MetaHome />
        <Ciclo data={user.dataUltimoExercicio}/>
        <TrainneWeak />
      </Container>
    </Fundo>
  );
};

export default Home;
