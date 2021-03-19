import React, { useState, useEffect } from 'react';
import { Platform, Text } from 'react-native';
import { Container, TextFinish } from './styles';

import UserLogged from '../../components/UserLogged';
import ButtonAplication from '../../components/ButtonAplication'
import { ScrollView } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native'

const FinishPhysicalAtivity = ({ navigation, route }) => {
  const [responseTrainne, setresponseTrainne] = useState({});

  useEffect(() => {
    setresponseTrainne(route.params.resp);
    console.log(responseTrainne);
  })

  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false} >
        <UserLogged cor='black' />

        <Container.Principal>
          {Platform.OS == 'ios' &&
            <LottieView source={require('../../assets/correct.json')} autoPlay loop={false} style={{
              width: 200,
              height: 200
            }} />
          }
          <TextFinish>Dados Salvos com sucesso!{"\n"}</TextFinish>
          <TextFinish style={{ fontSize: 14 }}>Indice do treino:</TextFinish>
          <TextFinish style={{ fontSize: 36 }}>{responseTrainne.resultadoFinal}</TextFinish>
        </Container.Principal>

        <Container.Button >
          <ButtonAplication text="INICIO" color="#3FC745" navigateTo="Home" />
        </Container.Button>
      </ScrollView>
    </>
  );
};

export default FinishPhysicalAtivity;
