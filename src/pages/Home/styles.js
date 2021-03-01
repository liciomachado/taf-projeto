import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const Container = ({ children }) => {
    return (
        <LinearGradient
            colors={['rgba(0,0,0,0.6)','rgba(0,0,0,0.1)', 'transparent']}
            style={{
                flex: 1,
            }}
        >
            {children}
        </LinearGradient>
    )
}

export const Fundo = styled.ImageBackground`
    flex: 1;
`;
