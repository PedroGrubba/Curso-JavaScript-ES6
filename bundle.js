"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var ToDoList =
/*#__PURE__*/
function () {
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    this.todos = [];
  }

  _createClass(ToDoList, [{
    key: "addToDo",
    value: function addToDo() {
      this.todos.push('Novo ToDo');
      console.log(this.todos);
    }
  }]);

  return ToDoList;
}();

var todo = new ToDoList();

document.getElementById('novoToDo').onclick = function () {
  todo.addToDo();
}; // ---------------------------------------------------------------------------
// Diferenca entre uma funcao normal do Javascript, contra uma arrow function


var arr = [1, 2, 3, 4]; // Function comum

var newArrFunction = arr.map(function (item) {
  return item + 1;
});

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log("Function normal: ", newArrFunction);
console.log(soma(1, 3));
console.log(soma());
console.log("/ ------------------------------------------------------------- /"); // Arrow Function

var newArrArrowFunc = arr.map(function (item) {
  return item + 1;
});

var somaArrowFunc = function somaArrowFunc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log("Arrow Function: ", newArrArrowFunc);
console.log(somaArrowFunc(1, 3));
console.log(somaArrowFunc()); // Exemplos de desestruturacao de objetos
// Pode ser usado tambem em retornos de APIs acredito

var usuario = {
  nome: 'Pedro Grubba',
  idade: 23,
  endereco: {
    cidade: 'Recife',
    estado: 'PE'
  }
};
var nomeComum = usuario.nome;
var idadeComum = usuario.idade;
var cidadeComum = usuario.endereco.cidade;
console.log("Retorno comum de informacoes: ", nomeComum, idadeComum, cidadeComum);
console.log("/ ------------------------------------------------------------- /");
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log("Retorno com a desestruturacao do Objeto: ", nome, idade, cidade);
