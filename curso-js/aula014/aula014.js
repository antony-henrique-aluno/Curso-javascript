//Aula sobre switch case 

let colocacao = 5;
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
    case 4: case 5: case 6:
        console.log("Se você terminou em 4, 5 e 6! então receba algo");
        break;
    default:
        console.log("Tu não está no top 6 cara, supera!!");
        break;
}