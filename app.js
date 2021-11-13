const books = require('./database')
const readline = require('readline-sync')

const initialInput = readline.question('Deseja buscar um livro? S/N: ')

if(initialInput.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Fantasia', '/Terror', '/Suspense')
    const categoryInput = readline.question('Qual categoria voce escolhe: ')
    const response = books.filter(book => book.category === categoryInput)
    console.table(response)
}else{
    const orderedBooks = books.sort((book,otherBook) => book.pages - otherBook.pages)
    console.log('Esses são todos os livros disponíveis')
    console.table(orderedBooks)
}