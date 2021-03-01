import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, User } from './styles';
import { Gravatar } from 'react-native-gravatar'


const UserLogged = ({ cor }) => {
  return (
    <Container>
      <Gravatar options={{ email: 'licio.machado@hotmail.com', secure: true }} style={styles.avatar} />
      <User>
        <User.title style={{ color: cor || 'white' }}>CB Maurício</User.title>
        <User.subTitle style={{ color: cor || 'white' }}>licio.machado@hotmail.com</User.subTitle>
      </User>
    </Container>
  );
};

export default UserLogged;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 75
  }
})