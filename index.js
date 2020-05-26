const query = `query { 
    getBooks{
        title
        author
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
            query
        })
    }).then(r => r.json()).then(data => {
        const list = document.querySelector('.booklists');
        const books = data.data.getBooks;

        list.innerHTML = books.map((book) =>
            `<div class='book'>
            <h4><b>${book.title}</b></h4>
            <p>${book.author}<p>
        </div>`
        ).join('');
    });
}


function addBook() {

    const mutation = `mutation{ 
    addBook(id:30, author:"한강", title:"소년이 온다"){
        id
        author
        title
        description
    }
    }`;

    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            query: mutation
        })
    }).then(r => console.log(r))
}
