
const books = [{
    title: 'Atomic Habits',
    author: 'James Clear',
    released: '10/16/2018',
    genres: [ 'History', 'Nonfiction' ]
}, {
    title: 'Onyx Storm',
    author: 'Rebecca Yarros',
    released: '9/9/202', 
    genres: [ 'Young Adult', 'Fiction' ]
}, {
    title: 'Hopeless',
    author: 'Alison Moore',
    released: '9/9/202', 
    genres: [ 'Self Help', 'Nonfiction' ]
}]


books.forEach(book => {
    const li = document.createElement('li')
    booksList.append(li)

    const { title, author, released } = book // object destructuring

    const html = `
        <span class="title">${title}</span>
        <span class="author">${author}</span>
        <span class="released">${released}</span>
    `

    li.innerHTML = html
})

// Note: book and bookList variables removed for brevity

books.forEach(book => {
    const li = document.createElement('li')
    booksList.append(li)

    const { title, author, released } = book // object destructuring

    const html = `
        <span class="title">${title}</span>
        <span class="author">${author}</span>
        <span class="released">${released}</span>
    `

    li.innerHTML = html
})


const booksList = document.querySelector('#books')

books.forEach(book => {
    const li = document.createElement('li')
    booksList.append(li)

    const { title, author, released, genres } = book

    li.innerHTML = `
        <span class="title">${title}</span>
        <span class="author">${author}</span>
        <span class="released">${released}</span>
        <ul class="genres"></ul>
    `

    const ul = li.querySelector('ul')
    genres.forEach(genre => {
        const genreLi = document.createElement('li')
        ul.append(genreLi)
        genreLi.textContent = genre
    })
})

/* Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

Object.values(): Returns an array of a given object's own enumerable property values.

Object.keys(): Returns an array of a given object's own enumerable property names.
*/