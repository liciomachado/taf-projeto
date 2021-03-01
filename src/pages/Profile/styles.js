import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    flex: 4;
    align-items: center;
    justify-content: center;
`;

export const User = styled.View`
`;

User.title = styled.Text`
    color: #000;
    font-size: 36px;
    font-family: Roboto_400Regular;
`;

User.subTitle = styled.Text`
    color: #000;
    font-size: 14px;
    text-align: center;
    font-family: Roboto_300Light;
`;
