const calculos ={
    n1:15,
    n2:30,
    soma: function(){
        return this.n1 + this.n2
    },
    subtrair: function (){
        return this.n1 - this.n2
    },
}

//manipular
calculos.n1 = 100;
calculos.n2 = 50; 

const resultado = calculos.soma();
console.log(resultado);