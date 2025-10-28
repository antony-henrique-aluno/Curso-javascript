//Aula sobre funções anônimas

/*Funcoes anônimas são funções que não recebem um nome.
Funcoes anônimas são funções que são chamadas em tempo
de execução.
*/


function nomeada() {
    //Função nomeda
}

//Exemplo de função anônima
const exemplo = function(n1=0, n2=0){
    return n1 * n2;
}

console.log(exemplo(20, 2))


//function anônima com parâmetro rest
const exemplo2 = function(...param){
    let valorSoma = 0;
    for(let res of param){
        valorSoma += res
    }
    
    return valorSoma;
}

console.log(exemplo2(2, 10))