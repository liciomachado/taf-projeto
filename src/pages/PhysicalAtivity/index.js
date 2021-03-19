import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Exercises from '../../components/Exercise';
import ModalDetailsExercise from '../../components/ModalDetailsExercise';
import UserLogged from '../../components/UserLogged';
import WeakAndDay from '../../components/WeakAndDay';
import { Container } from './styles';

const PhysicalAtivity = () => {
  const [showModal, setShowModal] = useState(false);

  function onClickModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      {showModal && <ModalDetailsExercise isVisible={showModal}
        onCancel={() => setShowModal(false)}
        id={1} />
      }
      <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false} >


        <UserLogged cor='black' />

        <Container.Principal>
          <WeakAndDay />

          <Exercises onClickModal={onClickModal} />

        </Container.Principal>

        {/* <Container.Button >
          <ButtonAplication text="CONCLUIR ATIVIDADE" color="#3FC745" navigateTo="FinishRun" />
        </Container.Button> */}
      </ScrollView>
    </>
  );
};

export default PhysicalAtivity;
