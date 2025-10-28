//Criando uma logica de compra onde pego o nome e o preço de cada produto dentro de uma array

let arrayFrutas = [
    "Zenith",
    "Lilia",
    "Aisha",
    "Ghislane"
];

let arrayPrecos = [
    2000,
    2000,
    1500,
    5000
]

for(let i = 0; i < arrayFrutas.length; i++){
    console.log(`Nome e indice de cada fruta : ${i} / ${arrayFrutas[i]}: ${arrayPrecos[i]} R$`)
}

/*for(let n = 0; n < arrayPrecos.length; n++){
    console.log(`Preço e indice de cada fruta : ${n} / ${arrayPrecos[n]}`)
}*/


let frutas = 2



function compras() {
    //Condição que verifica se o indice de cada nome dentro do array existe
    if (frutas >= 0 && frutas < arrayFrutas.length) {
    let nomeFrutas = arrayFrutas[frutas];//Variavel que recebe o nome de dentro da array
    let precoFrutas = arrayPrecos[frutas];
    console.log(`Você escolheu comprar a ${nomeFrutas} e seu preço é ${precoFrutas} R$`);
    let qtdCompras = 13
    
        if (qtdCompras > 0) {
            let precoFinal = precoFrutas * qtdCompras;
            console.log(`Você comprou ${qtdCompras} ${nomeFrutas}
            e o preço final a pagar é de ${precoFinal} R$`);
            if (qtdCompras >= 12) {
                let desc = .95
                let precoFinalDesc = precoFinal * desc;
                console.log(`Você comprou ${qtdCompras} ${nomeFrutas}, Tome um desconto de ${desc} %`)
                console.log(`Você pagarar apenas ${precoFinalDesc} R$`)
            }
        }else{
            console.log("Valor não encontrado")
        }
    }else{
        console.log("Essa fruta ainda não existe")
    }
}

compras()




function toComprando() {
    let toComprandoAinda = true;
    while (toComprandoAinda) {
        let resposta = Number(prompt("Digite -1 se quiser ou digite 1 para continuar comprando"))
        if (resposta === -1) {
            toComprandoAinda = false;
            console.log("Você saiu")
            break;
            
            
        } else if (resposta === 1) {
            let arrayDxD = ["asia", "akeno", "koneco"];
            let arrayPrecos = [3000, 10000, 2500];
            for(let i = 0; i < arrayDxD.length; i++){
                console.log(`Nome e preço de cada perereca: ${arrayDxD[i]}: ${arrayPrecos[i]} R$`);
            }
            
            let indiceNome = parseInt(prompt(`Escolha quem vai comprar`));
            if(indiceNome >= 0 && indiceNome < arrayDxD.length){
                let nomeDxD = arrayDxD[indiceNome]; //Variavel que guarda o nome do objeto escolhido pelo seu index
                let precoDxd = arrayPrecos[indiceNome];
                console.log(`Voce escolheu comprar a ${nomeDxD} e o preço dela é de ${precoDxd} R$`);
                let qtdCompras = parseInt(prompt(`Quantas ${nomeDxD} você vai comprar?`));
                if(qtdCompras > 0){
                    let precoFinal = precoDxd * qtdCompras;
                    console.log(`você comprou ${qtdCompras} ${nomeDxD} e você gastou ${precoFinal} R$`)
                }
            }
            
            
 
        }else{
            console.log("Digite algo valido entre -1 ou 1")
        }
    }
}

toComprando()



