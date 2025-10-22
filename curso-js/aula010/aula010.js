//Aula sobre operadores ternario

// let num1 = 10;
// res = ((num1 % 2) ? "impa" : "par");
// console.log(res)

let num1 = 10;
res = (!(num1 % 2) ? "par" : "impar");
console.log(res);

//Teste logico do valor ternario ? se true e : se false
// 0 = false 
// 1 = true

let num2 = 10;
res2 = (num2 % 2 === 0 ? "par" : "impar");
console.log(res2)
/* if (!(num1 === 0)) {
    console.log("par");
}else{
    console.log("impa")
} */


let n1 = 10;
let n2 = 20;

res3 = (n1 > n2 ? "sim, n1 é maior que n2" : "não, n1 não é maior que n2");
console.log(res3)

let stts = prompt("Digite A ou I").toLocaleLowerCase().trim();

res4 = (stts === "a" ? "Ativo" : "Inativo");

console.log(res4);