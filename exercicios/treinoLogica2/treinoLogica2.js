const treino = () =>{
    
    let ativo = true;
    while(ativo){
        let escolha = parseInt(prompt("Escolha a sua opcão"))
        
        switch (escolha) {
            case 0:
                console.log("Você saiu, volte sempre!")
                ativo = false;
                break;
            case 1:
                console.log("=".repeat(40))
                const itens = ["Ghislane", "Lilia", "Zenith", "Aisha"];
                const notas = [10, 8, 8, 10];
                
                for(let i = 0; i < itens.length; i++){
                    console.log(`Esolha seus itens preferidos ${i} : ${itens[i]} ${notas[i]}`)
                }
                
                const escolhaItem = parseInt(prompt (`Faça a sua escolha entre ${itens}`))
                const itemEscolhido = itens[escolhaItem];
                const notaItens = notas[escolhaItem];
                if(escolhaItem >= 0 && escolhaItem < itens.length){
                    console.log(`Você escolheu a ${itemEscolhido}`);
                    console.log(`A nota dela é de ${notaItens}`);
                    let qtdCompras = parseInt(prompt(`Quantos(a) ${itemEscolhido} vai comprar?`));
                    if (qtdCompras > 0) {
                        console.log(`Você comprou ${qtdCompras} ${itemEscolhido}`);
                        break;
                    }else{
                        console.log("Quantidade inválida, escolha de forma correta!");
                        break;
                    }
                    break;
                }else{
                    console.log("Esse produto não existe");
                    break;
            }
        }
    }
}

treino()