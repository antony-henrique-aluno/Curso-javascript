// Crie um loop que permita ao usuário tentar adivinhar o número
// Dica: use prompt() para entrada do usuário

let cpu = Math.floor(Math.random() * 10) + 1;
let usuario = Number(prompt("Tente adivinha o numero da CPU"));
let tentativas = 3;