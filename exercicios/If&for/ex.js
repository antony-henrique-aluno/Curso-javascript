
//Encontre o maior numero de uma array 

let arr = [10, 15, 20, 25, 30, 1000];
let maiorNum = arr[0]; //Começa com o maior numero de uma array 

for (let i = 0; i < arr.length; i++) {
//Pecorre cada elemento da array

    if (arr[i] > maiorNum) {
        //Compara o elemento atual, com o maior elemento
    //encontrado dentro da array
        
        maiorNum = arr[i]; //Atualiza a array com o maior numero encontrado
    }
    // console.log(maiorNum)
}
console.log(maiorNum); //Imprime o valor

let arr2 = [100, 30, 50, 1001, 60];
let maior = arr2[0];
//A variavel maior começa com o menor numero da array

for(posiArr of arr2){
//O for of percorre cada elemento da array
//Lembrando que, para mostrar cada elemento da array com o for of 
// precisa-se usar a variavel criada dentro do for of
    if (posiArr > maior) {
        //Condição que compara o elemento atual,
        //com o maior encontrado 
        maior = posiArr // A variavel maior recebe a array atualizada com o maior elemento
    }
}

console.log(`O maior numero dentro da array é ${maior}`)