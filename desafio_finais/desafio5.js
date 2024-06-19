/*
5) Classificar pessoas maiores de idade
Dado um array de objetos onde cada objeto tem as propriedades
nome e idade, escreva uma função que retorne um novo array
contendo apenas as pessoas com 18 anos ou mais.
*/


const pessoas = [
    { nome: "Gabriel", idade: 25 },
    { nome: "Dulce", idade: 22 },
    { nome: "Pamela", idade: 28 },
    { nome: "Renan", idade: 32 },
    { nome: "Rebeca", idade: 6 },
    { nome: "Lucky", idade: 8 }
];

function maioresDeIdade(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade >= 18);
}

const maiores = maioresDeIdade(pessoas);
console.log(maiores);


