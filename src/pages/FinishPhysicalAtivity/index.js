import React, { useState, useEffect } from 'react';
import { Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, TextFinish } from './styles';

import UserLogged from '../../components/UserLogged';
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

        {/* <Container.Button >
          <ButtonAplication text="INICIO" color="#3FC745" navigateTo="Home" />
        </Container.Button> */}
      </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: 'white' }}>INICIO</Text>
        </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3FC745',
    marginHorizontal: 50,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },

})

export default FinishPhysicalAtivity;
