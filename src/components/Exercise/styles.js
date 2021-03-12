import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

Container.Box = styled.View`
    width: 150px;
    height: 180px;
    margin: 10px;
    justify-content: center;
`;

export const BoxImage = styled.Image`
    width: 100%;
    flex: 1;
`;