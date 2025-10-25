
//Encontre o maior numero de uma array 

let arr = [10, 15, 20, 25, 30];
let maiorNum = arr[0] //Começa com o maior numero de uma array 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maiorNum) {
        maiorNum = arr[i]
    }
    // console.log(maiorNum)
}
console.log(maiorNum)
