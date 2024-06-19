/*10) Você tem essa lista abaixo de contatos:
let listaDeContatos = [
 { nome: "João", telefone: "123456789" },
 { nome: "Maria", telefone: "987654321" },
 { nome: "Matheus", telefone: "111222333" },
 { nome: "Matheus Fraga", telefone: "444555666" },
 { nome: "Ana", telefone: "999888777" }
];
- Agora crie em seguida uma função que deverá listar todos os
contatos da lista que tem o nome de Matheus.
*/

let listaContatos = [
    { nome: "João", telefone: "123456789" },
    { nome: "Maria", telefone: "987654321" },
    { nome: "Matheus", telefone: "111222333" },
    { nome: "Matheus Fraga", telefone: "444555666" },
    { nome: "Ana", telefone: "999888777" }
];

function listarContatosComNome(nome, listaContatos) {
    return listaContatos.filter(contato => contato.nome.indexOf(nome) !== -1);
}

const contatosMatheus = listarContatosComNome("Matheus", listaContatos);
console.log(contatosMatheus);
