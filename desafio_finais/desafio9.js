/*
 9) Crie uma função chamada adicionarElemento que aceite dois parâmetros: um array
    e um elemento. 
    - A função deverá adicionar o elemento recebido como parametro dentro 
      do array porem precisa verificar se esse elemento que deseja adicionar já não 
      exista no array, caso ele já exista dentro do array não deverá ser adicionado ao
      array.     
    - Ao final o array não deve ter itens duplicado se tentar chamar a função duas vezes
    tentando adicionar mais de uma vez o mesmo elemento no array.
*/
function adicionarElemento(lista, elemento) {
    const indexItem = lista.indexOf(elemento);

    if (indexItem !== -1) {
        return;// Return aqui para caso já exista no array paramos o código aqui.
    }

    lista.push(elemento);
}

let numeros = [1, 2, 3];
adicionarElemento(numeros, 4); // Tentar adicionar na lista o numero 4
adicionarElemento(numeros, 6); // Tentar adicionar na lista o numero 6
adicionarElemento(numeros, 6); // Tentar adicionar na lista o numero 6
console.log(numeros); // Saída: [1, 2, 3, 4, 6]