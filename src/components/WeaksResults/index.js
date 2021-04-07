import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, TextWeak } from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';

import WeakAndDay from '../WeakAndDay';
import { nextIndice } from '../../pages/Profile'
import { useAuth } from '../../contexts/auth';

const WeaksResults = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [meta, setMeta] = useState('');
  const [semana, setSemana] = useState(0);
  const [dia, setDia] = useState(0);

  useEffect(() => {
    setMeta(nextIndice(user.indiceTaf))
    setSemana(parseInt(user.diaDesafio / 7) + 1);
    setDia(parseInt(user.diaDesafio % 7) + 1);
  })

  return (
    <>
      <Container>
        <Container.Principal>
          <WeakAndDay dia={dia} semana={semana} />

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
          <TextWeak.day>{meta}</TextWeak.day>

        </Container.Principal>

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
