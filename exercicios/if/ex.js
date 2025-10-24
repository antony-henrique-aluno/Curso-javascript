// Verifique se uma pessoa é maior de idade (18 anos ou mais)
const idade = 17;
if(idade >= 18){
    console.log("É maior de idade")
}else{
    console.log("Tem menos que " + idade + " anos")
}

// Classifique uma nota: A (>=90), B (>=80), C (>=70), D (<70)
const nota = 60;

if (nota >= 90) {
    console.log("Sua nota é A")
}else if (nota >= 80) {
    console.log("Sua nota é B")
}else if (nota >= 70) {
    console.log("Sua nota é C")
}else{
    console.log("Sua nota é D")
}