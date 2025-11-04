//Treino de logica com função

const mainFunc = () =>{
    let n1 = 2
    let n2 = 1
    let res = n1 + n2

    console.log(res)
    dobrando(res)
}


const dobrando = (res) =>{
    this.res = res * 2
    if (!this.res < 8) {
        console.log("é", this.res)
    }else{
        console.log(this.res)
    }
}

mainFunc()


const funcMain = () =>{
    let n1 = 4;
    let n2 = 4;
    let res = n1 + n2
    console.log(res)
    const teste = 1
    
    
    if (teste === 0) {
        console.log("você saiu!")
    }
    
    const dobrar = () => {
        res = res * 2;
        console.log(res);
        
        
        let continuadobrando = true;
        contador = 0;
        while (continuadobrando) {
            contador++
            let continuaDobrando = "sim" 
            if (continuaDobrando === "não") {
                console.log("Valor n dobrado")
                continuadobrando = false;
            }else{
                let dobrado = res * 2;
                console.log(`valor ${res} foi dobrado para ${dobrado}`)
                
                if (contador >= 4) {
                    console.log("acabou " + contador)
                    continuadobrando = false;
                }
            }
        }
        
    }

    
    switch (teste) {
        case 1:
            dobrar()
            break;
        }
}

funcMain()