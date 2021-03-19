import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, TextWeak } from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';

import ButtonAplication from '../ButtonAplication';
import WeakAndDay from '../WeakAndDay';

const WeaksResults = () => {
  const navigation = useNavigation();

  return (
    <>
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
        {/* <Container.Button >
          <ButtonAplication text="INICIAR ATIVIDADE" color="#3FC745" navigateTo="RunAtivity" />
        </Container.Button> */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RunAtivity')}>
          <Text style={{ color: 'white' }}>INICIAR ATIVIDADE</Text>
        </TouchableOpacity>
      </Container>
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

export default WeaksResults;
