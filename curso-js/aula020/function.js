//Aula sobre function tradicional

function exemplo(){ /*Declaração da função*/ 
    console.log("Espero eu, aprender javascript")
}

exemplo() 
exemplo()//Chamada da função
exemplo()//Você chamar a função quantas vezes quiser

for(let i = 0; i < 10; i++){
        exemplo() //Loop de 10 vezes da função exemplo
}


function exemplo2() {
        let n1 = 10;
        let n2 = 12;
        let res = n1 + n2 
        console.log(`A soma é ${res}`)
}

for(let n = 0; n < 10; n++){
        exemplo2()
}

const btnTest = document.querySelector("#toba");
btnTest.addEventListener("touchstart", exemplo3);

function exemplo3() {
        let d1 = document.querySelector(".d1");
        let d2 = document.querySelector(".d2");
        let d3 = document.querySelector(".d3");
        d1.innerHTML = "Deu certo1?"
        d2.innerHTML = "Deu certo2?"
        d3.innerHTML = "Deu certo3?"

}


/*Exemplo3*/