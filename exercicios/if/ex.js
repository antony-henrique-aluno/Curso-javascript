// Verifique se uma pessoa é maior de idade (18 anos ou mais)
const idade = 17;
if(idade >= 18){
    console.log("É maior de idade")
}else{
    console.log("Tem menos que " + idade + " anos")
}

// Classifique uma nota: A (>=90), B (>=80), C (>=70), D (<70)
const nota = 80;

if (nota >= 90) {
    console.log("Sua nota é A")
}else if (nota >= 80) {
    console.log("Sua nota é B")
}else if (nota >= 70) {
    console.log("Sua nota é C")
}else{
    console.log("Sua nota é D")
}


// Verifique se um dia é fim de semana
const dia = 'sábado';
if (dia === "segunda") {
    console.log("Hoje é segunda")
}else if (dia === "terça") {
    console.log("Hoje é terça")
}else if (dia === "quarta") {
    console.log("Hoje é quarta")
}else if (dia === "quinta") {
    console.log("Hoje é quinta")
}else if("Hoje é sexa"){
    console.log("Hoje é sexta");
}else if(dia === "sabado" || dia === "domingo"){
    console.log("Hoje é " + dia + " dia de semana");
}