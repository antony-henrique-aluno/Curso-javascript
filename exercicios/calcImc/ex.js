//Calculando o imc
let peso = Number(prompt("Digite o seu peso"));
let altura = Number(prompt("Digite a sua altura"));
let resultado = peso / (altura * 2);

if (peso === null || peso === 0 || altura === null || altura === 0) {
    console.log("Digite novamente");
}  
if (resultado < 18) {
    console.log("Abaixo do peso!");
    
}