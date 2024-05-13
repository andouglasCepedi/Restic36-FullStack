//Variáveis
/* 
Inicialização de um variável
Pode ser global ou local de acordo com o bloco em que foram declarados 
*/
var x = 35;

/*
Cria variáveis locais restritas ao bloco em que foram declarados
*/
let x = 40;

/*
Cria constantes que não podem ter seu valor alterados depois que atribuidos.
Escopo apenas de leitura
*/
const pi = 3.14;

/*
Depois de criadas, as variáveis podem ser definidas atribuindo um valor.
*/
x = 12;

//Tipos

//String
var nome = 'Bob';

//Template Literals
//Cria strings sem a necessidade concatenação manual
var nome = 'Bob';

var mensagem = `Olá, ${nome}!
                Seja bem vindo ao nosso site.`;

//Number
//Valores numéricos
let x = 10;

//Boolean
var bol = true;

/*
Array(arranjo)
*/
let arr = [1, 'Bob', 'Steve', 10];

//Acessando a posição 0 do array
console.log(arr[0]) //Saída: 1

//Acessando cada posição do array
arr.forEach((valor) =>{
    console.log(valor)// 1, Bob, Steve, 10
})

/*
Object
*/
var obj = document.querySelector('h1');

/*DOM*/

//Busca de elementos da página HTML
//Busca por ID
var elemento = document.getElementById("id");

//Busca por nome da classe
var elemento = document.getElementsByClassName("className");

//Busca por tag
var elemento = document.getElementsByTagName("tag")

//Manipulação de atributos
var minhaImagem = document.getElementById("minhaImagem");
minhaImagem.src = "nova-imagem.jpg";

//Ajuste de estilo do CSS
paragrafo.style.fontSize = "16px";

//Adição/remoção dinâmica de classes CSS
var meuElemento = document.getElementById("meuElemento");
meuElemento.classList.add("destaque");

//Ouvintes de eventos
botao.addEventListener("click", function() {
    console.log("Botão clicado!");
});




