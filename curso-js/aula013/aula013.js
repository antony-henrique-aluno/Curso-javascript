//Aula sobre estrutura condicionais

/* let num1 = 11;
if (num1 > 10) {
    console.log("Sim, num1 é maior que 10");
}else{
    console.log("Não, não é maior");
}
 */


//Usando logica

/* let idade = 26;

if (idade < 18) {
    console.log("É menor de idade");
}else if (idade < 24) {
    console.log("É maior de idade");
}else{
    console.log("Milf das boas");
} */


let idade = 17;
let temTrabalho = "não";
let temCertificado = "não";

if (idade >= 18 && temTrabalho === "sim" && temCertificado === "sim") {
    console.log("Que incrivel, Você tem grande chances de ter um bom futuro");
}else if (idade >= 18 && temTrabalho === "não" && temCertificado === "sim") {
    console.log("Que otimo, Você é maior de idade e tem certificado! pode ficar com o emprego");
}else if (idade < 18 && temTrabalho === "não" && temCertificado === "não") {
    console.log("Você menor de idade")
}