// Funçõe com parametros

/*
function mostraNome(){
    console.log(`seja bem vindo ${nome} ao sistema`)
}
*/
//mostraNome("Matheus Fraga")

const nota1 = 8;
const nota2 = 4;
const nota3 = 7;
const nome = "Gabriel"

function calculoMedia(nota1,nota2,nota3,nome){
    let media = (nota1 + nota2 + nota3)/3;
    return `O(A) aluno (a) ${nome} teve a média de ${media}`;
}

const mediaMatheus = calculoMedia(nota1,nota2,nota3, nome)

console.log (mediaMatheus);

const mediaFulano = calculoMedia (10,5,6, "Gabriel lima");

console.log(mediaFulano);

/*
let p = 3000;
let i = 0.03;
let n = 8;

let juros = p*i*n;

console.log (`O valor total de juros no período de ${n} meses é: ${juros} reais`)
*/


const p = 3000;
const i = 0.03;
const n = 8;

function calculadoraJuros(p, i, n) {
    let juros = p * i * n;
    return juros;
}

const jurosCalculados = calculadoraJuros(p, i, n);

console.log(jurosCalculados);

