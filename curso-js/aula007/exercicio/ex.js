//Criando uma logica qualquer



/* let speed = 120; 
rel=(speed > 90 ? "Você está alêm do limite permitido" : "Você está no valor permitido");

console.log(rel) */

let speed = 64;

if (speed < 65) {
    console.log("Uma boa velocidade limite");
}else if (speed < 75) {
    console.log("uma boa velocidade, ainda no limite")
}else{
    console.log("se ferror");
}

console.log("---------");

//Uma logica qualquer 2
let casaVenda = 150000;
let salario = 2500;
let valorEntrada = Number(prompt("Digite o valor de entrada"));
let valorTotal = casaVenda - valorEntrada;
let anosPagar = Number(prompt("Em quantos anos você vai pagar"));
let mesesPagar = anosPagar * 12;
let valorParcela = valorTotal / mesesPagar;
let limiteParcela = salario * 0.3;

console.log("---financiamento da casa---");
console.log("--- " + salario + "R$" + " ---");
console.log("--- " + valorEntrada + "R$" + " ---");
console.log("--- " + valorTotal + "R$" + " ---");
console.log("--- " + anosPagar + "anos" + " ---");
console.log("--- " + mesesPagar + "meses" + " ---");
console.log("--- " + valorParcela + "R$" + " ---");
console.log("--- " + limiteParcela + "%" + " ---");


if (salario < valorParcela) {
    console.log("Seu salario não permite comprar uma casa dessa magnetude");
}else if (limiteParcela < valorParcela) {
    console.log("Cuidado, o valor da parcela é maior que 30% do seu salario");
}else{
    console.log("parabens pela compra da casa");
}