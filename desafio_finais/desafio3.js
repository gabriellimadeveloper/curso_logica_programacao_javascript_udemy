/*
3) Classificar uma temperatura
Este desafio classifica a temperatura em 'Frio', 'Moderado' ou
'Quente'.
A temperatura é considerada 'Fria' se for menor que 10°C,
'Moderada' entre 10°C e 25°C, e 'Quente' se for maior que 25°C.
Crie uma função que vai verificar a temperatura enviada e
retornar se está 'Frio', 'Moderado' ou 'Quente' com base na
temperatura enviada.
*/

function verificarTemperatura(temperatura){
    if(temperatura < 10){
        return "Frio";
    } else if (temperatura >= 10 && temperatura< 25){
        return "Moderado";
    } else {
        return "Quente";
    }
}

console.log(verificarTemperatura(8));