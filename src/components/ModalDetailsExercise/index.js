import React from 'react';
import { Button, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { Container, FundoModal, ContainerModal, BoxImage } from './styles'
import flexao from '../../assets/flexao.png'

export default function ModalDetailsExercise({ isVisible, image, onCancel }) {
  return (
    <Modal transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
      animationType='slide'>
      <TouchableWithoutFeedback onPress={onCancel}>
        <FundoModal />
      </TouchableWithoutFeedback>
      <ContainerModal>
        <BoxImage resizeMode="contain"
          source={flexao}/>
        <Button title='Fechar' color='red' onPress={onCancel}/>

      </ContainerModal>
      <TouchableWithoutFeedback onPress={onCancel}>
        <FundoModal />
      </TouchableWithoutFeedback>
    </Modal>
  );
};
