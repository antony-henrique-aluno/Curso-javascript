//diferença entre var, let e const

//Uma variavel é um espaço na memoria na sua maquina que guarda o conteudo dentro dela.
//E essa variavel eu posso reutilizar e mudar o conteudo guardado dentro dela.

/* if (true) {
    var nome = "escopo de variaveis";
}

console.log(nome); */

function escopo(){
    let nome = "Hestia";
    if (true) {
        console.log("Dentro do escopo do if " + nome);
    }
    console.log("Fora do escopo do if" + nome);
}

console.log("Fora do escopo " + nome);