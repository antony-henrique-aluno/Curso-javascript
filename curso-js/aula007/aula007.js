//aula de operadores logicos.
// && -> and 
// || -> or 
// ! -> not 

//O valor dos resultados das operações logicas sera verdadeiro ou falso

//TABELA TRUE / VERDADEIRO 
// and --> &&

let n1, n2, n3, n4;

n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log(((n1 > n2) && (n1 > n3)));
// O operador logicos and / && só sera true se ambos os valores for verdadeiro

console.log(((n1 > n2) || (n1 > n3)));
// O operador logico or / || sera true se ao menos um dos valores for verdadeiro

// O operador logico not / ! é usado quando queremos inverter 
// os valores seja de true para false ou de false para true