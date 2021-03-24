import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Exercises from '../../components/Exercise';
import ModalDetailsExercise from '../../components/ModalDetailsExercise';
import UserLogged from '../../components/UserLogged';
import WeakAndDay from '../../components/WeakAndDay';
import { Container } from './styles';

const PhysicalAtivity = () => {
  const [showModal, setShowModal] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState(0);

  async function onClickModal(id) {
    setShowModal(!showModal);
    setIdSelecionado(id);
  }

  return (
    <>
      {showModal && <ModalDetailsExercise isVisible={showModal}
        onCancel={() => setShowModal(false)}
        id={idSelecionado} />
      }
      <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false} >

        <UserLogged cor='black' />

        <Container.Principal>
          <WeakAndDay />

          <Exercises onClickModal={onClickModal} />

        </Container.Principal>
      </ScrollView>
    </>
  );
};

export default PhysicalAtivity;
