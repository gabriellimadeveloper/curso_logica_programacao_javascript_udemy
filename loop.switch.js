// Switch (CASOS)

const codigoPromocao = 510;
let desconto = 0;

switch (codigoPromocao) {
    case 10:
        console.log("Produto Tênis")
        desconto = 0.03;
        break;
    case 500:
        console.log("Produto Camisetas")
        desconto = 0.05;
        break;
    case 510:
        console.log("Produto Eletrônico")
        desconto = 0.30;
        break;
    default:
        console.log("Produto não encontrado...")
        break;
}

console.log(`O valor do desconto atual é ${desconto}`)