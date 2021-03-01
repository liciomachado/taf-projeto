import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top: 30px;
    flex-direction: row;
`;

export const User = styled.View`
    flex-direction: column;
    padding-left: 5px;
`;

User.title = styled.Text`
    color: #FFF;
    font-family: Roboto_400Regular;
`;

User.subTitle = styled.Text`
    color: #FFF;
    font-size: 10px;
    font-family: Roboto_300Light;
`;