//Aula sobre função rest

function normal(n1=0, n2=0) {
    //Function com parâmetros normais
    return n1 * n2
}



function rest(...valores) {
    //Function com parâmetros rest
    /*Parâmetros rest, é uma forma de passar parâmetros
    a uma função aonde eu não preciso especificar 
    efetivamente a quantidade de parâmetros que eu quero
    enviar para dentro de uma função.*/
    
    /*Dentro de uma function rest, o tratamento dos
    parâmetros muda um pouco! Por exemplo, primeiro
    eu preciso saber quantos parâmetros foram 
    passados*/
    
    //Exemplo abaixo
   //let tamanho = valores.length;
    let soma = 0;
    for(let i = 0; i < valores.length; i++){
        soma += valores[i]
    }
    return soma; /*A propriedade length dá o
    comprimento do array, junto da propriedade spread
    que transforma os parâmetros em rest*/
}

console.log(rest(4, 10, 4, 10, 10)); /*da forma que está, usando a
function rest ele não retorna a soma e sim retorna
a quantidade de parâmetros dentro da function*/


function rest2(...valores2) {
    let soma2 = 0
    for(let v of valores2){
        soma2 += v;
    }
    
    return soma2; //Não esqueça do return;
}

console.log(rest2(2, 10));