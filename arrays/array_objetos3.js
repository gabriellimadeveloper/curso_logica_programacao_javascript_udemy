/*
> Crie uma lista de contatos onde deve ter o nome da pessoa e o telefone
> Como encontrar um nome dentro da lista de contatos pesquisando pelo nome?
*/

const contatos = [
    {nome:"Matheus", telefone:"99910000"},
    {nome:"Ana", telefone:"81210000"},
    {nome:"Jose", telefone:"91210012"},
];

const nome = "Ana";

function buscaContato(nomePessoa, listaContatos){
    if (!nomePessoa){
        console.log("O nome da pessoa é obrigatório!");
        return "";
    }
    const contatoPessoa = listaContatos.find((contato) => {
        return contato.nome === nomePessoa;
    });

    if (!contatoPessoa) {
        console.log(`Contato com o nome ${nomePessoa} não encontrado.`);
        return "";
    }

    return `${nomePessoa} tem o telefone: ${contatoPessoa.telefone}`;
}

const pessoa1 = buscaContato("Ana", contatos);
console.log(pessoa1);



