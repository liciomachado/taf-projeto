import React, { useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { useAuth } from '../../contexts/auth'

import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Gravatar } from 'react-native-gravatar'
import { Container, User, Content } from './styles';
import TrainneWeak from '../../components/TrainneWeak'

export default function Profile() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Content>
        <Gravatar options={{ email: 'licio.machado@hotmail.com', secure: true }} style={styles.avatar} />
        <User>
          <User.title>{user.nome}</User.title>
          <User.subTitle>{user.email}</User.subTitle>
        </User>

        <View style={styles.container}>
          <Text>Indíce atual</Text>
          <RNPickerSelect style={pickerSelectStyles}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "JavaScript", value: "JavaScript" },
              { label: "TypeStript", value: "TypeStript" },
              { label: "Python", value: "Python" },
              { label: "Java", value: "Java" },
              { label: "C++", value: "C++" },
              { label: "C", value: "C" },
            ]}
          />
          <Text>Meta</Text>
          <RNPickerSelect style={pickerSelectStyles}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "JavaScript", value: "JavaScript" },
              { label: "TypeStript", value: "TypeStript" },
              { label: "Python", value: "Python" },
              { label: "Java", value: "Java" },
              { label: "C++", value: "C++" },
              { label: "C", value: "C" },
            ]}
          />
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