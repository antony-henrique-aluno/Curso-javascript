//diferença entre var, let e const

//Uma variavel é um espaço na memoria na sua maquina que guarda o conteudo dentro dela.
//E essa variavel eu posso reutilizar e mudar o conteudo guardado dentro dela.

/* if (true) {
    var nome = "escopo de variaveis";
}

console.log(nome); */

function escopo(){
    //A variavel let sempre vai elevar de onde ela foi declarada para cima.
    let nome = "Hestia"; //Esse escopo aqui
    if (true) {
        //Está dentro deste aqui
        console.log("Dentro do escopo do if " + nome);
    }
    console.log("Dentro do escopo " + nome); //E desse tambem, pq ela está dentro do msm escopo
}
escopo()
console.log("Fora do escopo " + nome); //E aqui a variavel let não pode existir