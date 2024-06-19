/*
> Crie um carrinho de compras com lista de produtos onde cada produto tem um nome e preco:
> Calcule o total do carrinho
*/


// let totalCarrinho = 0;
// carrinho.forEach((produto)=> {
//   totalCarrinho += produto.preco 
// })
// console.log (`O Total do seu carrinho é: ${totalCarrinho}`)

function calcularTotalcarrinho(carrinho){
    let total = 0;
    let totalProdutos = carrinho.length;

    carrinho.forEach((produto) => {
        total += produto.preco
    });

    return `Seu carrinho tem ${totalProdutos} itens e o total do carrinho ficou: ${total}`
}

const carrinho = [
    { nome: "Tênis", preco: 99},
    { nome: "Calça jeans", preco: 79},
    { nome: "Camiseta", preco: 60},
    { nome: "Coca Cola", preco: 6},
]

const totalCarrinho = calcularTotalcarrinho(carrinho)

console.log(totalCarrinho);

const produtos = [
    {nome: "Iphone 15 pro Max", preco: 8900},
    {nome: "Capinha Iphone", preco: 150},
]

const totalCarrinho2 = calcularTotalcarrinho(produtos)

console.log(totalCarrinho2)