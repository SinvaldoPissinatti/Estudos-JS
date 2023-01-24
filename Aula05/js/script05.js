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