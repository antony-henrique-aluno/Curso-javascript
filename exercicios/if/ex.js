



// 1-Verificando se um numero é positivo ou negativo
let n = -1 
if (n < 0) {
    console.log(`${n} é um numero negativo`)
}else{
    console.log(`${n} é um numero positivo`)
}

// 2-Verificando se a pessoa é maior ou menor de idade
let idade = 10
if (idade >= 18 && idade < 24) {
    console.log("Essa garota já é maior de idade");
}else if (idade >= 24 && idade < 32) {
    console.log("Essa garota já é maior de idade e tambem uma bela milf");
}else if (idade >= 32 && idade < 42) {
    console.log("Essa garota já é maior de idade, mas continua linda! desconfio que é uma elfa");
}else if(idade >= 42){
    console.log("Com toda a certeza é uma elfa");
}else{
    console.log("Ainda é menor de idade")
}

// 3-Verificando se o numero é par 
let imparPar = 10
if (!(imparPar % 2 === 0)) {
    console.log(`${imparPar} é impar`)
}else{
    console.log(`${imparPar} é par`)
}