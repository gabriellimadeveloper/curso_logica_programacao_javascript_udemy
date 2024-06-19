/*
## Desafio 4
Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]

- Você deve devolver um array com todos os numeros que são multiplos de 3
*/

const numeros = [6, 12, 5, 9, 14, 27];
const numerosMultiplos = [];

numeros.forEach((numero) => {
    if(numero % 3 === 0){
    numerosMultiplos.push(numero)
    }
});

console.log(numeros)