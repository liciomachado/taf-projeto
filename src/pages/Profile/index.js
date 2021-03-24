import React, { useEffect, useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { useAuth } from '../../contexts/auth'

import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Gravatar } from 'react-native-gravatar'
import { Container, User, Content, TextIndice, Settings } from './styles';
import TrainneWeak from '../../components/TrainneWeak'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
export const nextIndice = (indice) => {
  switch (indice) {
    case "INSUFICIENTE":
      return "REGULAR";
    case "REGULAR":
      return "BOM";
    case "BOM":
      return "MUITO BOM";
    case "MUITO_BOM":
      return "EXCELENTE";
    case "EXCELENTE":
      return "EVOLUIR SEMPRE!";
    default:
      return "A DEFINIR";
  }
}

export default function Profile({ navigation }) {
  const { signOut, user } = useAuth();
  const [meta, setMeta] = useState('');

  useEffect(() => {
    setMeta(nextIndice(user.indiceTaf));
  })

  return (
    <Container>
      <Settings>
        <TouchableOpacity onPress={() => navigation.navigate('AccountConfig')}>
          <Ionicons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </Settings>
      <Content>
        <User>
          <Gravatar options={{ email: user.email, secure: true }} style={styles.avatar} />
          <User.title>{user.nome}</User.title>
          <User.subTitle>{user.email}</User.subTitle>
        </User>

        <View style={styles.container}>
          <Text>Indíce atual</Text>
          <TextIndice>{user.indiceTaf}</TextIndice>

          <Text>Meta</Text>
          <TextIndice>{meta}</TextIndice>

        </View>
      </Content>
      <TrainneWeak cor="#000" />

      <Button onPress={signOut} title="SAIR" color="red" />
    </Container>
  );
};


const styles = StyleSheet.create({
  avatar: {
    width: 186,
    height: 186,
    borderRadius: 200
  },
  picker: {
    borderColor: '#000',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: 'gray',
    color: 'black',
    paddingHorizontal: '30%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});