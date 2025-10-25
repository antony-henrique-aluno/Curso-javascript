//Aula sobre do while



//A diferença entre while e do while é que, o do while
//vai ao menos garantir a execução do programa ao menos
//uma vez, diferente do loop while convencional.
/* let n = 0 
while(n < 10){
    console.log(n)
    n++
} */

let n = 1
do{
    console.log(`Executou ${n}`)
    n++
}while(n <= 10)