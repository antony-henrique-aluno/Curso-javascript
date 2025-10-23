// Aula sobre o operador spread

// let n1 = [10, 12,14];
// let n2 = [20, 24,28, 30, 32, 34];
// let n3 = [...n1, ...n2];

// console.log("n1: " + n1)
// console.log("n2: " + n2)
//console.log("n3: " + n3)
//console.log("Tipo: " + typeof(n3))

/* const jogador1 = {nome: "Ghislane", energia: 100, vidas: 3, forca: 10};
const jogador2 = {nome: "Eris", energia: 150, vidas: 2, speed: 20};
const jogador3 = {...jogador1, ...jogador2};

console.log(jogador3); */

// spreed com funcoes

const soma = (v1, v2, v3) =>{
    return v1 + v2 + v3;
};

// somando valores com spreed
let valor = [1, 4, 6]
console.log(soma(...valor));



// console.log(soma(1, 4, 6))