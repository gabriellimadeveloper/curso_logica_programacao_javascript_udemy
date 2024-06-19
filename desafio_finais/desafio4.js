/*4) Algoritmo para classificar numero par ou ímpar
Escreva uma função que receba um número e retorne "Par" se o
número for par e "Ímpar" se o número for ímpar.*/


function verificarImparOuPar(n){
    let resto = n % 2
    
    if (resto == 0) {
        return n + " par";
    } else {
        return n + " impar";
    }
}

console.log(verificarImparOuPar(6))