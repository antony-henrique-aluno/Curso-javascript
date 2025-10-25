// aula sobre break e continue


//O break é uma expressão que vai gerar uma interrupção
//na execução

//O continue é um pouco diferente! O continue quando 
//executado dentro de um loop ele para somente aquela
//interação e pula para a proxima interação e continua
//normalmente a execução, ele só não vai executar 
//a interação atual.


//Exemplo break
let n = 0;
let max = 1000;
while(n < max){
    //Se (n) for maior que 10 o loop entra na condição
    //dentro do if, o loop encontra o break, o break
    //é execultado e o loop é interrompido
    if (n > 10) {
        break;
    }
    console.log(`Loopando ` + n);
    n++;
}
console.log("Continuando o programa");


//Exemplo continue
let b = 0;
let energia = 1000;
let contPares = 0 //Contador dos numeros pares
for(let i = b; i < energia; i++){
    // console.log(`loop for ${i}`)
    if (i % 2 === 0) {
        continue;
    }
    contPares++
}
console.log(`Quantidade de pares: ${contPares}`)

console.log("fim do programa");