/**
 * Para iniciar o Yarn nos projetos, execute os seguintes comandos:
 * - yarn init
 * - yarn add @babel/cli
 * - yarn add @babel/preset-env
 * - yarn add @babel/core
 *  Por ultimo, abrir o arquivo package.json e adicionar as linhas abaixo:
 *
           "scripts": {
               "dev": "babel ./main.js -o ./bundle.js -w"
           }
 *
 * - criar um arquivo .babelrc e inserir as seguintesl linhas:
            {
                "presets": ["@babel/preset-env"]
            }
 * - para rodar o script criado, utilize yarn dev (nome do script)
 */

 class ToDoList {
    constructor(){
        this.todos = [];
    }

    addToDo(){
        this.todos.push('Novo ToDo');
        console.log(this.todos);
    }
 }

 const todo = new ToDoList();
 document.getElementById('novoToDo').onclick = function(){
     todo.addToDo();
 }

 // ---------------------------------------------------------------------------
 // Diferenca entre uma funcao normal do Javascript, contra uma arrow function

 const arr = [1, 2, 3, 4];

 // Function comum
 const newArrFunction = arr.map(function(item){
     return item + 1;
 });
 
 function soma(a = 3, b = 6){
    return a + b;
 }
 
 console.log("Function normal: ", newArrFunction);
 console.log(soma(1, 3));
 console.log(soma());
  
 console.log("/ ------------------------------------------------------------- /");
 // Arrow Function
 const newArrArrowFunc = arr.map(item => item + 1);
 const somaArrowFunc = (a = 3, b = 6) => a + b;

 console.log("Arrow Function: ", newArrArrowFunc);
 console.log(somaArrowFunc(1, 3));
 console.log(somaArrowFunc());

 // Exemplos de desestruturacao de objetos
 // Pode ser usado tambem em retornos de APIs acredito
 const usuario = {
     nome: 'Pedro Grubba', 
     idade: 23, 
     endereco: {
         cidade: 'Recife',
         estado: 'PE',
     },
 };

 var nomeComum   = usuario.nome;
 var idadeComum  = usuario.idade;
 var cidadeComum = usuario.endereco.cidade;
 console.log("Retorno comum de informacoes: ", nomeComum, idadeComum, cidadeComum);

 console.log("/ ------------------------------------------------------------- /");
 
 const { nome, idade, endereco: { cidade } } = usuario;
 console.log("Retorno com a desestruturacao do Objeto: ", nome, idade, cidade);

