//aula sobre getElementById


/*Exemplo de como pegar o id de um elemento dom*/

const divC1 = document.getElementById("c1");
const divC2 = document.getElementById("c2");
const divC3 = document.getElementById("c3");
const divC4 = document.getElementById("c4");
const divC5 = document.getElementById("c5");

const arrayElementosDom = [divC1, divC2, divC3, divC4, divC5];
console.log(arrayElementosDom)
arrayElementosDom.forEach((el) =>{
    //percorrendo cada elemento dentro do array
    console.log(el)
});

console.log(divC1); //Chama o elemento
console.log(divC1.id); //Pega o id
console.log(divC1.innerHTML); //pega o conteudo
divC1.innerHTML = "To aprendendo, eu acho!?";
