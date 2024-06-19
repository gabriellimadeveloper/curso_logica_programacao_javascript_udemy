//while: (ENQUANTO) É usado quando você quer repetir um bloco de código enquanto uma condição for verdadeira

let valor = 2;

while (valor < 5){
    console.log("Valor atual: " + valor)
    valor++; // valor = valor +1
}

// Do while: a condição é verificada após a execução do bloco de código

let contador = 0;

do {
    console.log("Este numero do contador atual é " + contador)
    contador++;
} while (contador <=0);