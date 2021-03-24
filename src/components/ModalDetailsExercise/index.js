import React, { useEffect, useState } from 'react';
import { Button, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import { Container, FundoModal, ContainerModal, BoxImage } from './styles'
import flexao from '../../assets/flexao.png'
import { exercicioTaf } from '../../assets/aquecimento'

export default function ModalDetailsExercise({ isVisible, image, onCancel, id }) {

  const [exericicoSelecionado, setexericicoSelecionado] = useState({});

  useEffect(() => {
    console.log(exercicioTaf[id])
    setexericicoSelecionado(exercicioTaf[id])
  }, [])

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
          source={exericicoSelecionado.foto} />
        <Text style={styles.textPrincipal}>{exericicoSelecionado.nome}</Text>

        <Text style={styles.txt}>{exericicoSelecionado.descricao}</Text>
        {/* {exericicoSelecionado.descricao.map(function(item){
                return <Text style={styles.txt}>{item}</Text>
        })} */}

        {/* <Button title='Fechar' color='red' onPress={onCancel}/> */}
        <TouchableOpacity onPress={onCancel}>
          <Text style={{ color: 'red', alignItems: 'flex-end' }}>Fechar</Text>
        </TouchableOpacity>
      </ContainerModal>
      <TouchableWithoutFeedback onPress={onCancel}>
        <FundoModal />
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  textPrincipal: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
    marginTop: 10,
    paddingBottom: 40,
  },
  txt: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'justify',
    marginHorizontal: 30,
    marginBottom: 20
  }
})
