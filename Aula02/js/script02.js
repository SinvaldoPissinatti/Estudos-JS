/*
arquivo js externo
*/


document.write("Olá mundo!")
console.log("outro olá mundo!")

// alert("Outro olá mundo do outro olá mundo!")
/* VARIÁVEIS ATRIBUIDAS*/
let mensagem = "Minha mensagem";
let mensagem2 = "Outra Mensagem";
let meuPeso = 55.5;
let minhaAltura = 1.65;
let minhaIdade = 18;
let ehDoador = false;
let teste = null; // possui nenhum valor, pode assumir qualquer valor


/*CONTASNTES ATRIBUÍDAS*/ 
const PI = 3.1415;
const TAXA = 0.5;

teste = "Algum conteúdo"; //dei o valor de string

document.write("<p> Mensagem" + mensagem + "</p>");
document.write(`Mensagem2: ${mensagem2}`);
document.write("<p> Meu peso: " + meuPeso + "</p>");
document.write(`Minha Altura: ${minhaAltura}`);
document.write("<p> Minha idade: " + minhaIdade + "</p>");
document.write(`É doador?: ${ehDoador}`);
document.write("<p> Teste: " + teste + "</p>");
document.write(`Valor de PI: ${PI} <br>`);
document.write(`Valor da taxa: ${TAXA}`);