/*8) Dado um número de 1 a 7, imprima o dia da semana
correspondente.
Entendendo que o 1 dia da semana é domingo e o ultimo dia o 7 é
o sabado, deve criar um algoritmo quando usuario pesquisar entre
1 ao 7 dia deverá retornar o dia da semana respectivo.*/

let dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}
