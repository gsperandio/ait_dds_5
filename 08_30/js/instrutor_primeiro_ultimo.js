'use strict';

const instrutores = [
    'ANNA JULYA DOS SANTOS DA SILVA',
    'EMANOEL VITOR VENTURA ATANAZIO',
    'ISAAC LUCCA DE PAULA BARBARA',
    'MATHEUS SARTI BRUNELLI',
    'SARAH MONTEIRO DUQUE',
    'DEIVID GUIMARAES GONCALVES FILHO',
    'HELOISA RANGEL GUIMARAES',
    'MARCO ANTONIO SANTOS MEDEIROS',
    'PIETRO GABRIEL HERINGER MENEZES',
    'DANIEL KALEB DE OLIVEIRA ALVES MOREIRA',
    'AMANDA XAVIER NASCIMENTO',
    'VITOR VARGAS PARAJARA',
    'SAMARA DA SILVA RIBEIRO',
    'ANNA JULYA DOS SANTOS DA SILVA',
    'AYMAR ANTONIO SILVA',
    'JOAO PEDRO COSTA DA SILVA', 
    'GABRIEL DE ASSIS SPERANDIO'
];


for(let i = 0; i < instrutores.length; i++){
    let nomes = instrutores[i];
    const pieces = nomes.split(' ');
    console.log(pieces[0], pieces[pieces.length-1]);
}