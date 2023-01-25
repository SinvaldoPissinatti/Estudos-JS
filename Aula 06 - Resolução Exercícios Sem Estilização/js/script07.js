/*resolução dos exercícios propostos */

// EXERCICIO 1

let titulo1 = "INFORMAÇÕES"
let lutador = {
    nome   : "Sinvaldo Pissinatti Silva",
    nacionalidade : 'Brasiliense',
    idade  : 18,
    peso   : 55.4,
    altura : 1.65
}

document.write("<h1> " + titulo1 + "</h1>")
document.write(`Lutador com o nome "${lutador.nome}" possui as seguintes caraterísticas: <br>`)
document.write(`Nacionalidade: ${lutador.nacionalidade} <br>`)
document.write(`Idade: ${lutador.idade} anos <br>`)
document.write(`Peso: ${lutador.peso} KG <br>`)
document.write(`Altura: ${lutador.altura} m <hr>`)

// EXERCICIO 2
let titulo2 = 'FRASE DO DIA'

document.write("<h1>"+ titulo2 + "</h1>")

const dia = 25
const mes = 01
const ano = 2023
const fraseDoDia = "Os primeiros 90% do código representam os primeiros 10% do tempo de desenvolvimento. Os 10% restantes do código é para mostrar aos outros os 90% do tempo de desenvolvimento."
const autor = "Tom Cargirll"

document.write(`${dia}/${mes}/${ano} <br>`)
document.write(`"${fraseDoDia}" <br>`)
document.write(`<i>${autor}</i> <hr>`)

// EXERCICIO 3
let titulo3 = "MESES DO ANO"
document.write(`<h1>${titulo3}</h2>`)

let meses = ['Janeiro', 'Fevereiro', 'Março', '...']

document.write(`${meses} <hr>`)

// EXERCICIO 4

let titulo4 = "Objeto JOGO"
document.write(`<h1>${titulo4}</h1>`)

let game = {
    jogo  : ['League of Legends', 'Battlefield'],
    desenvolvedor : ['Riot Games', 'Activision'],
    lancamento    : ['2009', '1999']
}

document.write(`Nome do jogo: <i>${game.jogo[0]}</i> <br>`)
document.write(`Desenvolvido por: <i>${game.desenvolvedor[0]}</i> <br>`)
document.write(`Ano de lançamento: <i>${game.lancamento[0]}</i> <hr>`)