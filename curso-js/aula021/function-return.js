//Aula function com retorno

function exemplo1() {
    let n1 = 10
    let n2 = 3
    let res = n1 * n2
    return `O valor da multiplicação é de ${res}`;
}

console.log(exemplo1());


function exemplo2(){//Função com condicional
    let n3 = 10;
    let n4 = 3.5;
    let res2 = n3 * n4;
    if(res2 % 2 === 0){
        return "Par";
    }else{
        return "Impar";
    }
}


let resposta = exemplo2() //Variavel que recebe o return da função

console.log(resposta); //Exibindo a chamada da função com a variável que guardou o return da função

