//aula sobre o metodo map
const animes = ["Mushoku tensei", 
"Tensei shitara slime", "Konosuba", 
"One piece"];


/*O metodo map deixa passar dois parâmetros ou até mesmo três parâmetros.
O primeiro parâmetro indica o ELEMENTO da coleção que ele está interando,
O Segundo parâmetro indica o INDEX de cada elemento dentro da coleção.
*/

/*Se eu for executar alguma coisa dentro do map, eu preciso de uma função
Exemplo nomes.map((el, index)=>{
    Dessa forma que está no exemplo dado
})*/

/*animes.map((el, index) => {
    console.log(`Nome: ${el} - Posição ${index}`)
});*/

//exemplo 2 usando o map, retornando valores

const nomes = ["Luffy", "zoro", "nami", "sanji"];


//Criei uma variavel para receber o return da coleção nomes
//no exemplo abaixo, a variável N vai receber o return do
//metodo map, dessa forma, mostrando a posição de cada elemento
//dentro do array nomes.

/*let n = nomes.map((el, index) => {
    return `<div> ${index} </div>`;
})

console.log(n)*/


//Exemplo 3 percorrendo elementos do dom com map

//let el = document.querySelectorAll("div");
//const spreedEl = [...el]
//el = [...el] /*Usando o operador spreed para transformar 
//a coleção EL em uma coleção interavel*/
/*console.log(el)
el.map((elements, index) =>{
    elements.innerHTML = "To aqui e deu certo"
    //Alterando os valores de cada elemento
    
})*/


//Exemplo 4 usando o map
const el = document.querySelectorAll("div");

 /*O call precisa receber o array que ele vai operar
 e em seguida, ele precisa receber uma chamada de 
 um metodo que vai operar com o objeto, nesse caso
 estou usando uma arrow function! E para você pegar
 uma propriedade do elemento, você pode usar chaves {}
 dentro do parênteses da arrow function. logo em seguida 
 na frente da => retorne o próprio innerHTML*/
 
const valor = Array.prototype.map.call(el, ({innerHTML}) => innerHTML);
console.log(valor)