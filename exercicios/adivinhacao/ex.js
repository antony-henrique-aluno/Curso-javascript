// Crie um loop que permita ao usuário tentar adivinhar o número
// Dica: use prompt() para entrada do usuário

let cpu = Math.floor(Math.random() * 10) + 1;
let win = false

for (let tentativas = 3; tentativas > 0; tentativas--) {
    let usuario = Number(prompt("Tente adivinhar o numero da cpu"))
    if (usuario === cpu) {
        console.log(`Seu numero foi ${usuario} o da cpu foi ${cpu}`)
        win = true;
        break;
    }else{
        console.log(`Você errou, seu numero foi ${usuario} o da cpu foi ${cpu}. Você sô tem ${tentativas} restante!`);
    }
}
if (!win) {
    console.log("Suas tentativas não existem mais")
}