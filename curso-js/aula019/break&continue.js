// aula sobre break e continue


//O break é uma expressão que vai gerar uma interrupção
//na execução

//O continue é um pouco diferente! O continue quando 
//executado dentro de um loop ele para somente aquela
//interação e pula para a proxima interação e continua
//normalmente a execução, ele só não vai executar 
//a interação atual.


//Exemplos
let n = 0;
let max = 100;
while(n < max){
    console.log(`Loopando ${n}`);
    n++
}
console.log("Fim do programa")