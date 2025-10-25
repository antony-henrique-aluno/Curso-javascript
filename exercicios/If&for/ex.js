
//Encontre o maior numero de uma array 

let arr = [10, 15, 20, 25, 30, 1000];
let maiorNum = arr[0]; //Começa com o maior numero de uma array 

//Pecorre cada elemento da array
for (let i = 0; i < arr.length; i++) {
    //Compara o elemento atual com o maior elemento
    //encontrado dentro da array
    if (arr[i] > maiorNum) {
        maiorNum = arr[i]; //Atualiza a array com o maior numero encontrado
    }
    // console.log(maiorNum)
}
console.log(maiorNum); //Imprime o valor

let arr2 = [100, 30, 50, 1001, 60]