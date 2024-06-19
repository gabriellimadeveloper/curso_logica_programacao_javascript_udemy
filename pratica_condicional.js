// PRÁTICA 1

/*
const nota1 = 8;
const nota2 = 7.5;

const media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("PARABÉNS VOCÊ FOI APROVADO!")
    console.log("SUA MÉDIA FOI: " + media)
}

if (media < 7) {
    console.log("VOCÊ FICOU DE EXAME!")
    console.log("SUA MÉDIA FOI: " + media)
}
*/

//PRÁTICA 2

const produtoValor = 1000;
const freteGratis = false;

//VERDADEIRO (true)
//Falso (false)
/*
if (produtoValor >= 1000 && freteGratis ){
    console.log("PARABÉNS VOCÊ TEM O FRETE GRATIS NESSA COMPRA!")
}else{
    console.log("O FRETE FICOU: R$10")
}
*/

if (produtoValor >= 1000 || freteGratis ){
    console.log("PARABÉNS VOCÊ TEM O FRETE GRATIS NESSA COMPRA!")
}else{
    console.log("O FRETE FICOU: R$10")
}
