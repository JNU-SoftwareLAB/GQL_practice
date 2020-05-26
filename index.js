var query = `query { 
    getBooks{
        title
    }
}`;

/*
getBooks{ // 쿼리 명
    title // 필드
}
*/

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
