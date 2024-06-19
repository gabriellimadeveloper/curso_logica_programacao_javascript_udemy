const pessoa = {
    nome: "Matheus",
    idade: 28,
    cargo: "Full Stack",
    saudacao: function (){
        console.log ("Olá eu sou o Matheus")
    }
}

// console.log(pessoa)

pessoa.saudacao();

const calculos ={
    soma: function(numero1,numero2){
        return numero1 - numero2;
    }
}

const resultadoSoma = calculos.soma(10,20)
console.log(resultadoSoma);

const resultadoSubtracao = calculos.subtrair(30,12);
console.log(resultadoSoma);