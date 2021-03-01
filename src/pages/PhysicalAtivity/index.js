import React from 'react';
import { KeyboardAvoidingView, Platform, Text } from 'react-native';

import { Container } from './styles';
import UserLogged from '../../components/UserLogged';
import ButtonAplication from '../../components/ButtonAplication'
import WeakAndDay from '../../components/WeakAndDay';
import Exercises from '../../components/Exercise';
import { ScrollView } from 'react-native-gesture-handler';

const PhysicalAtivity = () => {
  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false} >
        <UserLogged cor='black' />

          <Container.Principal>
            <WeakAndDay />

            <Exercises />

          </Container.Principal>

          <Container.Button >
            <ButtonAplication text="CONCLUIR ATIVIDADE" color="#3FC745" navigateTo="FinishRun" />
          </Container.Button>
      </ScrollView>
    </>
  );
};

export default PhysicalAtivity;
