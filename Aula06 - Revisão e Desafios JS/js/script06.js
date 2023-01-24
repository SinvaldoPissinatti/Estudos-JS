/* Arquivo JS Externo - Aula 06 - Revisão*/

//criar variáveis use let ou var

let produto = 'Arroz';
let quant = 2;
let precoUnitario = 4.99;
let precoTotal = quant * precoUnitario;

//document.write(`Preço Total ${precoTotal} <br>`);

console.log(new Intl.NumberFormat('pt-BR').format(precoTotal));

//recomendado utilizar este tipo de formatação
document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} <hr>`)


//criar constantes
const nome = 'Sinvaldo Pissinatti'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC: ${imc} <br>`) //vai ficar com muitas casas decimais

//limitando as casas
document.write(`IMC 2 casas: ${imc.toFixed(2)} <br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3

document.write(`Nota final: ${notaFinal.toFixed(1)} <br>`)

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(`Valor da compra: ${compraComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <hr>`)