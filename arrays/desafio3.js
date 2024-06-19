
/*
## Desafio 3
Crie um array com esses numeros: [5, 15, 23, 2 ]

- Você deve devolver qual é a soma de todos esses numeros usando foreach
*/

const numeros = [5, 15, 23, 2];
let somaTotal = 0;

numeros.forEach((numero) => {
     //somaTotal = somaTotal + numero
     somaTotal += numero
});

console.log(`A soma total da lista é ${somaTotal}`)