//Calculando o imc
let peso = Number(prompt("Digite o seu peso"));
let altura = Number(prompt("Digite a sua altura"));
let resultado = peso / (altura * 2);
let imcValue = resultado.toFixed(2);
switch (peso === null || altura === null) {
    case 1:
        console.log(`O prompt ${peso} e o prompt ${altura} estão vazias, digite algo.`)
        break;
}

if (imcValue < 18) {
    console.log("Abaixo do peso! " + imcValue);
}else if(resultado < 25){
    console.log("Peso normal " + imcValue)
}else if (resultado < 30) {
    console.log("Está ficando obeso " + imcValue)
}else{
    console.log("Está obeso " + imcValue)
}