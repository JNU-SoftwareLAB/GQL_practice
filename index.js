var query = `query { 
    getBooks{
        title
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
        query
    })
}).then(r => r.json()).then(data => console.log('data returned:', data));
