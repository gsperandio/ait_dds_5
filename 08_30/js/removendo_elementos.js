'use strict';

let municipios = ['serra', 'cariacica', 'vila velha', 'viana', 'vitória'];

console.log(municipios[0].toUpperCase());

console.log(municipios);

// removendo dois elementos a partir do elemento 1
municipios.splice(1,2);
console.log(municipios);

// removendo dois elemetnos no final
municipios.splice(-2,2);
console.log(municipios);

// para juntar um array usamos o join e podemos definir um separador
let texto = municipios.join('-');
console.log(texto);