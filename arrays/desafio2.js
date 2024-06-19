/*
## Desafio 2 - 
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
qual a posição em que esse nome está na sua lista.
-> Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista
*/

const nomes = ["Alice","Lucas", "Carol", "David" ];

const nomeBuscado = "Alice"
const posicaoHenrique = nomes.indexOf(nomeBuscado);

if(posicaoHenrique!== -1){
    console.log (`O nome ${nomeBuscado} foi encontrado e está na posicao ${posicaoHenrique}`)
    console.log(nomes)
}else {
console.log (`O nome ${nomeBuscado} não foi encontrado na lista`)
}