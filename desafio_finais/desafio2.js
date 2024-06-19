/* 2) Verificar se todos os números são positivos
Este desafio recebe três números como parametro da função e
verifica se todos são positivos.
Se todos forem positivos, retorna verdadeiro; caso contrário,
retorna falso */

function verificarPositivoOuNegativo(numero){
    if (numero < 0){
        return numero + " Negativo";
    } else {
        return numero + " Positivo";
    }
}

console.log(verificarPositivoOuNegativo(2)); // Saída: "2 Positivo"
console.log(verificarPositivoOuNegativo(-5)); // Saída: "-5 Negativo"
