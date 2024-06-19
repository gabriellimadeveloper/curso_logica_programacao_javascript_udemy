
// filter - Filtrar
const numeros = [1, 5, 10, 30, 230];

const numerosFiltrados = numeros.filter((numero)=>{
    if(numero >= 10){
        return numero
    }
})

//console.log(numeros);
//console.log("=======")
//console.log (numerosFiltrados)

const nomes = ["gato", "cachorro", "elefante", "peixe", "leão", "Matheus"];

const filtro = nomes.filter((nome)=>{
    if(nome.length>= 5){
        return nome;
    }
})

//console.log(filtro);
//console.log(nomes);


//-FIND = Buscar
const alunos = ["Matheus", "Lucas", "Henrique"]

const buscaNome = alunos.find((aluno,index)=>{
    if(aluno ==="Matheus"){
        //console.log("O Matheus está na posição " + index)
        return aluno;
    }
})

//console.log(buscaNome);

//findIndex

const buscaAluno = alunos.findIndex((aluno)=> {
    return aluno ==="Henrique"
})

console.log(buscaAluno);