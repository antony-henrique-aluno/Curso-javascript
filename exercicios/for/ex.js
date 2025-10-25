// 1 - imprimir 10 numeros
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// 2 - imprimindo numeros pares de 1 a 20
for(let i = 0; i < 20; i++){
    if (!(i % 2 === 0)) {
        console.log(`O numero ${i}  é impar`);
    }else{
        console.log(`O numero ${i} é par`);
    }
}

// 3 - Calculando a soma dos numeros de 1 a 100
let soma = 0 //Variavel que armazena a soma de todos os numeros
//ou seja, um contador
for (let i = 0; i < 100; i++) {
    soma += i
}
console.log(soma)