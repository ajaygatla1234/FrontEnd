fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>response.json())
    .then(value=>console.log(value))
    .catch(()=>console.log(error.message));
    