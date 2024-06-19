/*
1) Verificar elegibilidade para votar
Crie uma função que verifique se uma pessoa é elegível para
votar.
A pessoa precisa ter 18 anos ou mais para votar, além disso,
vamos incluir uma verificação para ver se a pessoa tem menos de
75 anos, assumindo que acima dessa idade, o voto é facultativo.
- Com base na idade fornecida deverá retornar "Elegível para
votar", caso seja maior que 75 retornar "Voto facultativo" ou caso
seja menor de 18 retornar "Não elegível para votar"
*/


function elegibilidadeVotar(idade) {
    if (idade < 18) {
        console.log("Não elegível para votar");
    } else if (idade >= 18 && idade <= 75) {
        console.log("Elegível para votar");
    } else {
        console.log("Voto facultativo");
    }
}

// Exemplos de uso:
elegibilidadeVotar(17); // Não elegível para votar
elegibilidadeVotar(19); // Elegível para votar
elegibilidadeVotar(75); // Elegível para votar
elegibilidadeVotar(76); // Voto facultativo





