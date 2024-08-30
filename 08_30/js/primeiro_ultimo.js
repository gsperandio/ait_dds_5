'use strict'; //impede o uso de variaveis não declaradas

let nome = 'Gabriel';

let sobrenome = 'Sperandio';

console.log(sobrenome);

const instrutor = "Emanoel Vitor Ventura";

const pieces = instrutor.split(' ');

console.log(pieces[0], pieces[pieces.length-1]);

let array = [1,2,3,4,5,6];
console.log(array);

let numero = array.pop();
console.log(numero);
console.log(array);

//push empurra ao final do array
array.push(7);
console.log(array);

// shift remove e retorna a primeira
console.log(array.shift());
console.log(array);

// umshift adicione na primeira posição
array.unshift(0);
console.log(array);

let cores = ['verde', 'azul', 'roxo', 'vermelho', 'rosa'];

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

console.log("For simplificado") //para comentar no console
for(let cor of cores){
    console.log(cor);
}
