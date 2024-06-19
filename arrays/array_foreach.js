// Includes verifica se existe o item no array e devolve verdadeiro ou falso
const nomes = ["Matheus", "Lucas", "Ana", "Fulano"];
const verificaNome = nomes.includes("Fulano")

// forech
const alunos = ["Matheus", "Lucas", "Ana", "Maria"];

alunos.forEach((nome)=> {
    console.log (`Bem vindo (a) ${nome}`)
})


const valores = [10,500,300];

valores.forEach((valor)=>{
    const conta = valor + 150;
    console.log("Valor ajustado: " + conta)
})