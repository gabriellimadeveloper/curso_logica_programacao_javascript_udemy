/*
## Desafio 1 -
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 

-> Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.

### FEITO
*/

//                    0         1          2            3
const cargos = ["fullstack", "frontend", "Backend", "mobile"];
//cargos.splice(2,1)
//console.log (cargos)

const posicaoBackend =  cargos.indexOf("Backend");

if(cargos.indexOf !== -1){
    cargos.splice (1)
    console.log(`O cargo Backend se encontra posição na ${posicaoBackend}`)
}