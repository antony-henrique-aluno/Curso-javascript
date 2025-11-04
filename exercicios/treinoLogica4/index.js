const box = document.querySelectorAll(".box");

const mainFunc = () =>{
    const seuNome = document.querySelector(".nome");
    const seuEmail = document.querySelector(".email");
    const suaSenha = document.querySelector(".senha");
    const formulario = document.querySelector("form");
    
    
    funcBtn(formulario, seuNome, seuEmail, suaSenha);
    
}

const setError = (input, index) =>{
    input.classList.remove("sucess", "warning");
    input.classList.add("error");
    box[index].classList.remove("sucess", "warning");
    box[index].classList.add("error");
}

const setSucess = (input, index) =>{
    input.classList.remove("error", "warning");
    input.classList.add("sucess");
    box[index].classList.remove("error", "warning");
    box[index].classList.add("sucess");
}

const setWarning = (input, index) =>{
    input.classList.remove("sucess", "error");
    input.classList.add("warning");
    box[index].classList.remove("sucess", "error");
    box[index].classList.add("warning");
}


const funcBtn = (formulario, seuNome, seuEmail, suaSenha) =>{
    
    const user = "aisha";
    const email = "aisha220@gmail.com";
    const senha = "1234";
    
    formulario.addEventListener("submit", function(event){
        
        event.preventDefault()//Impende que o form avance antes de ser preenchido
        const nomeValue = seuNome.value.toLowerCase();
        const emailValue = seuEmail.value.toLowerCase();
        const senhaValue = suaSenha.value.trim()
        if(nomeValue === "" || emailValue === "" || senhaValue === "") {
            alert(`Digite algo válido`);
            return;
        }
        
        
        if (nomeValue.length <= 4) {
            setWarning(seuNome, 0);
            console.log("Seu nome está muito curto");
        } else if (nomeValue !== user) {
            setError(seuNome, 0);
            console.log("Nome incorreto");
        } else if (nomeValue === user) {
            setSucess(seuNome, 0);
            console.log("Seu nome está correto");
        }
        
        if(emailValue === email){
            console.log("Seu email está correto");
            setSucess(seuEmail, 1);
        }else if(emailValue !== email){
            console.log("email incorreto");
            setError(seuEmail, 1);
        }
        
        if (Number(senhaValue) === Number(senha)) {
            console.log("Sua senha está correta!");
            setSucess(suaSenha, 2);
        }else if(senhaValue !== senha){
            console.log("Sua senha está incorreta!");
            setError(suaSenha, 2);
        }
        
        if(nomeValue === user && emailValue === email
            && Number(senhaValue) === Number(senha)){
               // alert("Login concluído com sucesso!!");
                box.forEach((boxAlert) =>{
                    boxAlert.classList.remove("sucess");
                })
                formulario.reset();
                return;
            }
    });
}


document.addEventListener("DOMContentLoaded", mainFunc)
