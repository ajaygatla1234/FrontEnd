const headers = {
    'Content-Type':'application/json',
    'Authorization':'insert-token-here'
};

const body={
    userId:123456,
    title:'Demo with POST',
    city:"We are in Hyderabad"
};

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers:headers,
    body:JSON.stringify(body)
})
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(error=>console.log(error));


