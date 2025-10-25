//Aula sobre o loop while 

let cont = 0 
while(cont < 10){
    console.log(cont)
    cont++
}


//Fatorial de 5! 5*4*3*2*1 
//O loop while é otimo quando precisamos
//repetir programas quando não sabemos quando vai acabar

let n = 5 
let fatorial = 1;
while (n >= 1) {
    fatorial *= n
    n--
}
console.log(fatorial)