/*Arquivo JS aula 05 Objetos */

// CRIAR OBJETO
let pessoa = {
    nome   : 'Sinvaldo',
    idade  : 40,
    peso   : 55.5,
    altura : 1.75,
    doador : false,
}

let produtos = {
    descricao : [],
    preco     : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano   : [1999, 2005, 2010]
}

//ACESSAR PROPRIEDADE usando [.]
pessoa.nome;
pessoa.idade;
pessoa.altura;

//ACESSAR PROPRIEDADE usando ['']
pessoa['nome'];
pessoa['idade'];
pessoa['altura'];
 
//OPERACAO COM OBJETO, IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

//.toFixed(X)
// limita o numero de casas decimais
console.log("IMC "+ imc.toFixed(2));

//ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Sinvaldo Pissinatti";
produtos.descricao = ['Arroz'];
produtos.preco = [4.99];

//USANDO SPREED OPERATOR   
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo'];
produtos.preco = [...produtos.preco, 5.99, 6.00];

//USANDO SPREED OPERATOR em constantes
carros.marca = [...carros.marca, 'VW'];
carros.modelo = [...carros.modelo, 'Fusca'];
carros.ano = [...carros.ano, '1979'];