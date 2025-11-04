//Aula sobre getElementsByClassName

let divAulas = [...document.getElementsByClassName("aula")]
let aulasD1 = [...document.getElementsByClassName("d1")]
let aulasD2 = [...document.getElementsByClassName("d2")]
let especial = document.getElementsByClassName("aula")[1]

//Lembrando que, getElements retorna uma coleção html
console.log(divAulas)
console.log(aulasD1)
console.log(aulasD2)
console.log(especial)

aulasD1.forEach((el) =>{
    el.classList.add("destaque")
    setInterval(function(){
        el.classList.remove("destaque")
    }, 100)
    
    el.classList.add("destaque")
})

