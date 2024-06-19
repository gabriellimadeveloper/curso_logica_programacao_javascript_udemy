function criaPilha() {
    let elementos = [];

    function adicionar(elemento) {
        elementos.push(elemento);
    }

    function pilhaEstaVazia() {
        return elementos.length === 0;
    }

    function tamanho() {
        return elementos.length;
    }

    function topoPilha() {
        if (pilhaEstaVazia()) {
            return "A pilha está vazia.";
        }
        return elementos[elementos.length - 1];
    }

    function remover() {
        if (pilhaEstaVazia()) {
            return "A pilha está vazia.";
        }
        return elementos.pop();
    }

    function limpar() {
        elementos = [];
    }

    return {
        adicionar,
        tamanho,
        topoPilha,
        remover,
        limpar
    }
}

let pilha = criaPilha();

pilha.adicionar(10);
pilha.adicionar(20);
pilha.adicionar(50);

console.log(`O último elemento da pilha é ${pilha.topoPilha()}`);

let elementoRemovido = pilha.remover();
console.log(`Removendo o último elemento da pilha: ${elementoRemovido}`);

console.log(`O tamanho da pilha é ${pilha.tamanho()}`);

console.log("Limpando a pilha agora...")
pilha.limpar();

console.log(`O tamanho da pilha é ${pilha.tamanho()}`);
