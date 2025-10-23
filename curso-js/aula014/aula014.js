//Aula sobre switch case 

let colocacao = 4;
switch (colocacao) {
    case 1:
       console.log("Caso colocacao seja 1, retorna essa msg!");
       //A cada final de um case,preciso colocar um break;
        break;
    case 2:
        console.log("Segundo lugar");
        break;
    case 3:
        console.log("Terceiro lugar");
       break;
    default:
        console.log("Tu não está no top 3 cara, supera!!");
        break;
}