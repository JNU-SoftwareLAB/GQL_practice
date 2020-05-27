const getBooks = `
query { 
    getBooks{
        title
        author
    }
}`;

const addBookMutation = `
mutation addBook($author: String!, $title: String!, $description: String) { 
    addBook(id:30, author:$author, title:$title, description: $description){
        id
        author
        title
        description
    }
}`;

const deleteBookMutation = `
mutation deleteBook($title: String!){ 
    deleteBook(title: $title){
        id
        title
    }
}`;

function run() {
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            query : getBooks
        })
    }).then(r => r.json()).then(data => {
        console.log(data);
        const list = document.querySelector('.booklists');
        const books = data.data.getBooks;

        list.innerHTML = books.map((book) =>
            `<div class="book" onclick="deleteBook(this)" id=${book.title}>
            <h4><b>${book.title}</b></h4>
            <p>${book.author}<p>
        </div>`
        ).join('');
    });
}

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;

    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            query: addBookMutation,
            variables: {
                author,
                title,
                description
            }
        })
    }).then(r => console.log(r)).then(alert("Insert Complete"));
}

function deleteBook(e){
    const title = document.getElementById(e.id);
    console.log(title);
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            query: deleteBookMutation,
            variables: {
                title: title.id
            }
        })
    }).then(r => r.json()).then(alert("Delete Complete"));
}