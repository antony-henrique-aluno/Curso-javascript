//Aula sobre o loop for

// O loop for tem a seguinte sintax e para faze-lo funcionar
// eu preciso de 3 areas dentro do loop for!

/* for (let primeiro a inicialização = 
0; segundo a condição de execução < 
limit; e terceiro, o controle++) {
    
} */


//Teste ou pratica, como quiser chamar
console.log("Inicio do programa")
for(let i = 0; i < 10; i++){
    //o for é um loop que vai continuar sendo executado enquanto
    //a sua condição é verdadeira.
    console.log("Teste")
    //Exemplo: o i=0 é maior que 10? não 
    //o i=1 é menor que 10? é
    //o i=8 é menor que 10? é
    //o i=10 é menor que 10? não! i=10 agora é igual a 10.
    //Agora que i é igual a 10, o loop for deixa de rodar 
    //e segue o programa
}

console.log("Fim do prograna")

// Os cuidados que teremos que tomar com o loop for
// Cuidado 1 = tome cuidado com loops infinitos

for(let i = 0; i < 100; i++){
    
}