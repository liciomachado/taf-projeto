import React from 'react';
import { Text } from 'react-native';
import { Container, TextWeak } from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import ButtonAplication from '../ButtonAplication';
import WeakAndDay from '../WeakAndDay';

const WeaksResults = () => {
  return (
    <Container>
      <Container.Principal>
        <WeakAndDay />

        <AnimatedCircularProgress
          size={200}
          width={25}
          style={{ marginVertical: 25 }}
          fill={70}
          tintColor="#00e0ff"
          duration={2000}
          rotation={0}
          backgroundColor="#3d5875">
          {
            (fill) => (
              <Text>
                { 70}% Completo
              </Text>
            )
          }
        </AnimatedCircularProgress>
        <TextWeak.day>Próximo nível:</TextWeak.day>
        <TextWeak.day>Excelente</TextWeak.day>

      </Container.Principal>
      <Container.Button >
        <ButtonAplication text="INICIAR ATIVIDADE" color="#3FC745" navigateTo="RunAtivity"/>
      </Container.Button>
    </Container>
  );
};

export default WeaksResults;
