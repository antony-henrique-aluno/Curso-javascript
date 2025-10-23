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
let valorEntrada = parseFloat(prompt("Digite o valor de entrada"));
let anosPagar = parseInt(prompt("Em quantos anos você vai pagar"));
let valorTotal = casaVenda - valorEntrada;
let mesesPagar = anosPagar * 12;