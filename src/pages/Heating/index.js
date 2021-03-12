import React, { useEffect, useRef, useState } from 'react';
import { Button, Easing, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ButtonAplication from '../../components/ButtonAplication';
import UserLogged from '../../components/UserLogged';
import { Container, BoxImage, TextAtividade } from './styles';

import { exercicioEstatico, exercicioDinamico } from '../../assets/aquecimento'

const Heating = ({ route }) => {
    const [duration, setDuration] = useState(0);
    const [totalExercises, settotalExercises] = useState(0);
    const [exercicios, setexercicios] = useState(exercicioEstatico);
    let refCircularProgress;
    let timing = 5 * 1000;

    useEffect(() => {
        console.log(route.params.tipoExercicio);
        route.params.tipoExercicio == 1
            ? setexercicios(exercicioDinamico)
            : setexercicios(exercicioEstatico);

    }, [])
    useEffect(() => {
        settotalExercises(exercicios.length - 1);
    }, [exercicios]);

    useEffect(() => {
        //refCircularProgress.animate(100,timing, Easing.ease)
        if (duration <= totalExercises && duration > 0)
            refCircularProgress.reAnimate(0, 100, timing, Easing.ease)

    }, [duration]);

    function skip() {
        if (duration < totalExercises)
            setDuration(duration + 1)
    }
    function back() {
        if (duration <= totalExercises && duration != 0)
            setDuration(duration - 1)
    }
    function start() {
        setDuration(1)
    }

    return (
        <Container>
            <UserLogged cor='black' />
            <Container.Principal>
                <AnimatedCircularProgress
                    size={150}
                    width={25}
                    style={{ marginVertical: 25 }}
                    fill={0}
                    tintColor="#00e0ff"
                    duration={10000000}
                    ref={(ref) => refCircularProgress = ref}
                    rotation={0}
                    onAnimationComplete={() => {
                        if (duration < totalExercises) {
                            setDuration(duration + 1)
                        }
                    }}
                    backgroundColor="#3d5875"
                >
                    {
                        (fill) => (
                            <Text style={{ fontSize: 36, fontFamily: 'Comfortaa_500Medium' }}>
                                { duration} / {totalExercises}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <TextAtividade>{exercicios[parseInt(duration)].nome}</TextAtividade>
                <BoxImage source={exercicios[parseInt(duration)].foto} resizeMode='contain' />
                <Container.Buttons >
                    <Button title='Voltar' onPress={back} color='#00e0ff' />
                    <Button title='Iniciar' onPress={start} />
                    <Button title='Pular' onPress={skip} color='#00e0ff' />
                </Container.Buttons>
            </Container.Principal>
            <Container.Button >
                <ButtonAplication text="INICIAR ATIVIDADE" color="#3FC745" navigateTo="RunAtivity" />
            </Container.Button>
        </Container>
    );
};

export default Heating;
