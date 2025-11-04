//Aula sobre getElementsByTagName

const divC1 = document.getElementById("c1");
const divC2 = document.getElementById("c2");
const divC3 = document.getElementById("c3");
const divC4 = document.getElementById("c4");
const divC5 = document.getElementById("c5");

const arrayDivDom = [divC1, divC2, divC3, divC4, divC5]


/*Dois exemplo de como transformar uma colection HTML em
uma array*/
//const colectionDivDom = [...document.getElementsByTagName("div")];
let colectionDivDom = document.getElementsByTagName("div");
this.colectionDivDom = [...colectionDivDom];
this.colectionDivDom.map((el)=>{
    console.log(el);
})



//console.log("elementsByTagName", colectionDivDom); //Imprimindo uma html colection, nesse caso, as divs
console.log("elementById", arrayDivDom);

