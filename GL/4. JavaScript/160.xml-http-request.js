const headers = {
    'Content-Type':'application/json',
    'Authorization':'insert-token-here'
};

const xhr = new XMLHttpRequest();
//AJAX : Asynchronous Javascript And Xml
xhr.onload=function(){
    console.log(xhr.responseText);
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//send the request
xhr.send(); //sends the request and xhr.onload function will execute