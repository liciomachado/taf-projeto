import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   flex-wrap: wrap;
   align-items: center;
`;

Container.Box = styled.View`
    width: 150px;
    height: 180px;
    margin: 10px;
    align-items: center;
`;

export const BoxImage = styled.Image`
    width: 100%;
    flex: 1;
`;