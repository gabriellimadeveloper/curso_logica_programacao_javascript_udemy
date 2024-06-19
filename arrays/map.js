//Map

const alunos = ["Matheus", "Lucas", "Ana", "Maria"];

const resultado = alunos.map((aluno)=>{
    return aluno + "Online"
})

const numeros = [1, 5, 10];

const valoresDobrados = numeros.map((numero)=>{
    return numero * 2
})

console.log(valoresDobrados);

console.log(numeros);