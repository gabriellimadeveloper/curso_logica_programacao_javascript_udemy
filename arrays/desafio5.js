/*
## Desafio 5
Filtrar Palavras com Mais de 5 Letras usando foreach
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

- Você deve devolver um array com todas palavras que possuem mais de 5 letras
 */

const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];
const palavraMaiores = [];

palavras.forEach((palavra) => {
    if(palavra.length > 5){
        palavraMaiores.push(palavra);
    }
});

console.log (`As palavras que contém 5 letras são: ${palavraMaiores}`)
