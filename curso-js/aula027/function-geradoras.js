//Aula sobre funções geradoras

function* cores() {
    yield "vermelho";
    yield "verde";
    yield "azul";
}

const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)



function* perguntas(){
    const nome = yield "Qual é o seu nome?";
    const esporte = yield "Qual o seu esporte favorito?";
    return `Meu nome é ${nome}, e meu esporte favorito é ${esporte}`;
}

const itp = perguntas()
console.log(itp.next().value);
console.log(itp.next("Antony").value);
console.log(itp.next("Futebol").value);

function* contador() {
    let i = 0;
    while(true){
       yield i++
       if (i > 12) {
           break;
       }
    }
}


const itcon = contador()
console.log(itcon.next().value)


for(c of itcon){
    console.log(c)
}

