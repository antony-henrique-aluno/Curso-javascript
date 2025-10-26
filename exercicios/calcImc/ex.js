//Calculando o imc
let peso = Number(prompt("Digite o seu peso"));
let altura = Number(prompt("Digite a sua altura"));


if (peso && altura) {
    let resultado = peso / (altura * 2);
    let imcValue = resultado.toFixed(2);
    if (imcValue < 18) {
        console.log(`você pesa ${imcValue} Kg está abaixo do peso`);
    }else if (imcValue < 25) {
        console.log(`você pesa ${imcValue} Kg está com a pesagem normal`);
    }else if (imcValue < 30) {
        console.log(`você pesa ${imcValue} Kg está ficando obeso`);
    }else{
        console.log(`você pesa ${imcValue} Kg, ESTÁ TOTALMENTE OBESO`);
    }
}else{
    console.log("Valores invalidos");
}
