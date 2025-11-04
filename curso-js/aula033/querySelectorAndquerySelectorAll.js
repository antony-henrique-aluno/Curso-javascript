//Aula sobre querySelector e querySelectorAll
let divTodas = [...document.getElementsByTagName("div")]
let divAulas = [...document.getElementsByClassName("aula")]
let aulasD1 = [...document.getElementsByClassName("d1")]
let aulasD2 = [...document.getElementsByClassName("d2")]
//let especial = document.getElementById("d1");

//Lembrando que, getElements retorna uma coleção htmlconsole.log(divAulas)
/*console.log(divTodas)
console.log(divAulas)
console.log(aulasD1)
console.log(aulasD2)
console.log(especial)*/

//Mostrando a diferença entre as getElements e querySelector

//let query_divTodas = [...document.querySelectorAll("div")];


//Pegando todas class com o nome aula usando o querySelectorAll
//let query_divAula = [...document.querySelectorAll(".aula")];



//Capturando elementos que possuem o atributo class usando o
//querySelectorAll
//let query_divClass = [...document.querySelectorAll("div[class]")];





//Capturando todos os elementos da tag p que está dentro de uma div
//usando o querySelectorAll
//Esse metodo pode ser usado com class e id ou qualquer outra tag
//que esteja dentro de outra tag
let query_divClass = [...document.querySelectorAll("div > p")];





//Pegando todas class com o nome D1 usando o querySelectorAll
let query_divD1 = [...document.querySelectorAll(".d1,p")]



//Pegando todas class com o nome D2 usando o querySelectorAll
let query_divD2 = [...document.querySelectorAll(".d2")]




//Pegando o id usando o querySelector
let especial = document.querySelector("#d1");



//especificando as tags que eu quero pegar usando querySelectorAll
let query_especificando = document.querySelectorAll("div, p");

console.log(query_especificando)

//console.log(query_divAula);
//console.log(query_divD1);
//console.log(query_divD2);
//console.log(especial);
console.log(query_divClass);
