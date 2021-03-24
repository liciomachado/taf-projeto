import abducaoBracoHorizontalDinamico from './abducaoBracoHorizontalDinamico.png';
import circundacaoDosBracosDinamico from './circundacaoDosBracosDinamico.png';
import corridaLateralDinamico from './corridaLateralDinamico.png';
import elevacaoCalcanharDinamico from './elevacaoCalcanharDinamico.png';
import elevacaoDeJoelhoDinamico from './elevacaoDeJoelhoDinamico.png';
import extencaoAlternadoVerticaDinamico from './extencaoAlternadoVerticaDinamico.png';
import extensaoDaPernaDinamico from './extensaoDaPernaDinamico.png';
import polichineloDinamico from './polichineloDinamico.png';
import torcaoDeTroncoDinamico from './torcaoDeTroncoDinamico.png';


import run from './run.gif';
import abd from './abdominal.gif';
import flexaogif from './flexao.gif';
import correr from './corrida.gif';

export const exercicioTaf = [{
    nome: "Flexao de Braços",
    foto: flexaogif,
    descricao:
        ["Deixe as costas rentes ao chão, bem retas. \n\n",
            "Flexione as pernas, mantendo os pés apoiados e joelhos na direção do teto. \n\n",
            "Levante as costas do chão, mas não deixe o peito encostar nos seus joelhos. \n\n"]
}, {
    nome: "Abdominal supra",
    foto: abd,
    descricao:
        ["Deixe as costas rentes ao chão, bem retas. \n\n",
            "Flexione as pernas, mantendo os pés apoiados e joelhos na direção do teto. \n\n",
            "Levante as costas do chão, mas não deixe o peito encostar nos seus joelhos. \n\n"]
}, {
    nome: "Barra fixa",
    foto: correr,
    descricao:
        ["Deixe as costas rentes ao chão, bem retas. \n\n",
            "Flexione as pernas, mantendo os pés apoiados e joelhos na direção do teto. \n\n",
            "Levante as costas do chão, mas não deixe o peito encostar nos seus joelhos. \n\n"]
}, {
    nome: "Corrida",
    foto: run,
    descricao:
        ["Deixe as costas rentes ao chão, bem retas. \n\n",
            "Flexione as pernas, mantendo os pés apoiados e joelhos na direção do teto. \n\n",
            "Levante as costas do chão, mas não deixe o peito encostar nos seus joelhos. \n\n"]
}];

export const exercicioDinamico = [{
    nome: "Corrida",
    foto: elevacaoDeJoelhoDinamico
}, {
    nome: "Corrida com elevação dos joelhos",
    foto: elevacaoDeJoelhoDinamico
}, {
    nome: "Corrida com extensao da perna a frente",
    foto: extensaoDaPernaDinamico
}, {
    nome: "Corrida com elevação dos calcanhares",
    foto: elevacaoCalcanharDinamico
}, {
    nome: "Corrida Lateral",
    foto: corridaLateralDinamico
}, {
    nome: "Corrida com torção de tronco",
    foto: torcaoDeTroncoDinamico
}, {
    nome: "Corrida com circundação dos braços",
    foto: circundacaoDosBracosDinamico
}, {
    nome: "Adução e abdução de Braços na horizontal",
    foto: abducaoBracoHorizontalDinamico
}, {
    nome: "Extensão alternada de braços na vertical",
    foto: extencaoAlternadoVerticaDinamico
}, {
    nome: "Polichinelo",
    foto: polichineloDinamico
}];


export const exercicioEstatico = [{
    nome: "Abdominal supra",
    foto: abd
}, {
    nome: "Abdominal supra",
    foto: abd
}, {
    nome: "Barra fixa",
    foto: correr
}, {
    nome: "Flexao de Braços",
    foto: flexaogif
}, {
    nome: "Corrida",
    foto: run
}, {
    nome: "Flexao de Braços",
    foto: flexaogif
}, {
    nome: "Corrida",
    foto: run
}];