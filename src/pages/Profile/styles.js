import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

`;

export const Content = styled.View`
    flex: 6;
    align-items: center;
    justify-content: center;
`;

export const User = styled.View`
    flex: 2;
`;

User.title = styled.Text`
    color: #000;
    text-align: center;
    font-size: 36px;
    font-family: Roboto_400Regular;
`;

User.subTitle = styled.Text`
    color: #000;
    font-size: 14px;
    text-align: center;
    font-family: Roboto_300Light;
`;
export const TextIndice = styled.Text`
    font-size: 36px;
    text-align: center;
`;

export const Settings = styled.View`
    padding-top: 30px;
    padding-right: 10px;
    align-items: flex-end;
`;