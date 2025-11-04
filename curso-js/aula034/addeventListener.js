//Aula sobre events

/*Eventos! Existe diversas formas de trabalhar com eventos
juntando o html e o javascript. Nós podemos programar os
eventos diretamente nas tags html e tbm diretamente nos
arquivos de js, nesse caso, é a melhor forma, e tbm
a mais organizada.*/


/*Para usar events primeiro precisamos trazer o elemento
html ml que queremos programar o evento! Exemplos, abaixo!*/

const d1 = document.querySelector("#d1");

//Para usarmos os events, iremos chamar o addEventListener



/*para chamar o evento com arrow function, deixe sempre
a chamada do evento, abaixo da função, nesse caso
arrow function*/

/*const msg = () => {
    alert("deu certo o")
}


d1.addEventListener("click", msg)*/




/*Forma de prograr eventos usando função anônima

Como pode ver, dessa forma é bem mais simples e 
bonita*/

/*d1.addEventListener("click", () =>{
    alert("Evento feito com function anônimas")
})*/



/*Agora iremos captura e mostrar o elemento que recebeu
o evento! Desta forma saberemos qual elemento disparou
o evento.

Primeiro, dentro do parentses da função anônima, crie
uma variavel genérica! Ex: "event"

logo em seguida, use o console.log() e dentro dele
use a variavel que você criou dentro da função anônima
e na frente da variavel dentro do console log, coloque
.target, dessa forma, você pode capturar o elemento
que disparou o evento*/

/*d1.addEventListener("click", (event) => {
    console.log(event.target)
    
    
    Exemplo de como usar o elemento capturado usando
    o target! Você tbm pode usar em htmlColection
    const el = event.target
    el.classList.toggle("destaque")
})*/


//Exemplo de como usar eventos em uma html colection

const aula = document.querySelectorAll(".aula");

aula.forEach((el) =>{
    el.addEventListener("click", function(event){
        const eventClick = event.target;
        el = eventClick.classList.toggle("destaque")
        console.log(el.id + " Elemento clicado")
    })
})