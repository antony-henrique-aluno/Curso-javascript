//1 - Ordem de como se ler o código!

/*O javascript lê o código de cima para baixo, ou seja,
ele declara todas as funções antes de começar a executar
cada uma delas. */

//Exemplo 

const exemploA = () =>{
    console.log("Exemplo A")
}

exemploA(); //Chamada da função

const exemploB = () =>{
    console.log("Exemplo B")
}

exemploB(); //Chamada da função

/*Como pode ver, primeiro a função é todas lidas e em
em seguida executa a função que foi chamada*/

//===================================================

// 2 - Ordem na qual o código é executado

/*A execução das funções depende de onde ela foi chamada
e não dá ordem que elas foram escritas */

//Exemplo

const soma = () =>{
    let n1 = 3;
    let n2 = 3;
    
    let res = n1 + n2;
    dobrar(res);
}

const dobrar = (res) =>{
    let dobra = res * 2
    console.log(dobra);
    triplicar(dobra)
}

const triplicar = (dobra) =>{
    let triplica = dobra * 3;
    console.log(triplica)
}

soma();

/*Explicando a ordem de execução no exemplo de cima

1-Começa com a primeira função! Nesse caso, a func soma()
pq eu a chamei no final

2-E dentro da func soma(), chamo a segunda func, nesse caso,
A func dobrar()

3-E dentro da segunda, chamo a terceira e assim por diante!*/

/*Então, apesar de tudo, o código está escrito de cima para baixo,
a execução vai sendo executada de baixo para cima, conforme
as ordem de chamadas das funções.*/
