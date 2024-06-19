// Array de objetos.
const Alunos = [
    {
        nome: "Matheus",
        idade: 28,
        cargo: "FullStack"
    },
    {
        nome: "Ana",
        idade: 30,
        cargo: "Frontend" // Corrigi um erro de digitação em "Frotend"
    },
    {
        nome: "Lucas",
        idade: 23,
        cargo: "RH"
    }
]

console.log(Alunos[0].cargo)

Alunos.forEach((aluno) => {
    console.log(`Aluno(a) ${aluno.nome}`);
    console.log(`Cargo Atual ${aluno.cargo}`);

    console.log("===========")
})
