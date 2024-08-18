function greeting(message='Hello',name='Guest'){
    return `${message} ${name}`;
}

console.log(greeting('Good Morning,','Kumar'));
console.log(greeting('Good Morning,'));
console.log(greeting());

console.log(greeting(undefined,'world'));
console.log(greeting(null,'world'));