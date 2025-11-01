//Aula sobre o operador this


//exemplo 1 do uso do this

/*function aluno(nome, nota){
    //vnome = nome
    
    Se você não quer criar uma nova variavel para
    receber o valor do parâmetro nome, você pode usar
    o operador this, que vai indicar que o THIS.NOME 
    faz referência a um elemento da minha função nome!
    Ou seja, this.nome é como se fosse uma variável
    declarada para a função aluno que recebe o valor 
    do parâmetro nome
    
    this.nome = nome;
    this.nota = nota;
    
    console.log(nome);
    console.log(nota);
}

aluno("Gojo", 6)*/




//exemplo 2 de this criando metodos


/*function aluno(nome, nota){
   
    this.nome = nome;
    this.nota = nota;
    
    Para chamar essa função temos que usar o operador
    new, já que estamos usando um esquema de classes
    para usar o operador new 
    
    this.dados_anonimos = function(){
        setTimeout(function(){
            console.log(this.nome);
            console.log(this.nota);
        }, 3000)
    }
}


const a1 = new aluno("gojo", 6)
a1.dados_anonimos()*/


function aluno(nome, nota) {
    
    this.nome = nome;
    this.nota = nota;
    
    
    this.dados_anonimos = function() {
        setTimeout(function() {
            console.log(this.nome);
            console.log(this.nota);
        }, 3000)
    }
    
    this.arrow_dados = function(){
        setTimeout(() =>{
            console.log(this.nome);
            console.log(this.nota);
        }, 3000)
    }
}

const a2 = new aluno("Lilia", 10);
a2.arrow_dados()