// Encontre todos os números entre 1 e 50 que são divisíveis por 3
for(let i = 1; i <= 50; i++){
    if (i % 3 === 0) {
        console.log(`Todos os numeros impar são ${i}`)
    }
}


// Conte quantas vogais existem em uma string
const texto = "";
let cont = 0 
let vogais = "aeiou";
for(let i = 0; i < texto.length; i++){
    if(vogais.indexOf(texto[i]) !== -1){
        cont++
        console.log(cont)
    }
}

// Encontre o maior número em um array
const numeros = [3, 7, 2, 9, 1, 4];
for(let i = 0; i < numeros.length; i++){
    
}