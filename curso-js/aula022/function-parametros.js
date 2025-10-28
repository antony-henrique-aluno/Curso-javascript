//Aula de função com parâmetros

function soma(n1=0, n2=0) {
    console.log(n1 + n2)
}

soma(5, 6);

function soma2(n3=0, n4=0) {
    return n3 + n4;
}

console.log(soma2(10, 20))


function soma3(n5=0, n6=0) {
    let res = n5 + n6
    return res;
}

let somado = soma3(450, 50);

console.log(somado)

