
//Encontre o maior numero de uma array 

let arr = [10, 15, 20, 25, 30];
let maiorNum = arr[0]


for (let i = 0; i < arr.length; i++) {
    if (arr > maiorNum) {
        console.log(`O maior numero é ${maiorNum}`)
    }
}

