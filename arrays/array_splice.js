//splice

/*
    Index (indice): A posição no array onde a operação começará
    quantidade: O número de elementos a serem removidos a partir daquela posição.
    elementos que deseja adicionar naquele index (opcional)
*/

//               0  1  2  3
const numeros = [1, 5,20,10];

numeros.splice(1,2,30);

//console.log(numeros);


const nomes = ["Lucas", "Ana", "Matheus", "Maria"]

const resultado = nomes.splice (2,2, "João","Joaquina")

console.log(resultado);
console.log("---------")
console.log(nomes);