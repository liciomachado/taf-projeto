import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, User } from './styles';
import { Gravatar } from 'react-native-gravatar'
import { useAuth } from '../../contexts/auth';


const UserLogged = ({ cor }) => {
  const { user } = useAuth();

  return (
    <Container>
      <Gravatar options={{ email: user.email, secure: true }} style={styles.avatar} />
      <User>
        <User.title style={{ color: cor || 'white' }}>{user.nome}</User.title>
        <User.subTitle style={{ color: cor || 'white' }}>{user.email}</User.subTitle>
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