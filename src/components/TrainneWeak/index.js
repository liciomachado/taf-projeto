import React from 'react';

import { Container, TextWeakCicle, Content, ButtonWeak, Text } from './styles';

const TrainneWeak = ({ cor }) => {
  return (
    <Container>
      <TextWeakCicle style={{ color: cor || 'white' }}>SEMANA DE CICLO</TextWeakCicle>
      <Content>
        <ButtonWeak>
          <Text>01</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>02</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>03</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>04</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>05</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>06</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>07</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>08</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>09</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>10</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>11</Text>
        </ButtonWeak>
        <ButtonWeak>
          <Text>12</Text>
        </ButtonWeak>
      </Content>
    </Container>
  );
};

export default TrainneWeak;
