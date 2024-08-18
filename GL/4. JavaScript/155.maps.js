//simple key-value pairs
const userdetails={
    '1234':{
        'username':'Krishna',
        'ags':42
    }
}

const numbers = new Map([
    [1,'One'],[2,'Two']
]);

const fruits = new Map([
    ['apples',500],
    ['pears',300],
    ['oranges',200]
]);

console.log(userdetails);
console.log(numbers);
console.log(fruits);
console.log(fruits.size);
console.log(fruits.entries());
console.log(fruits.keys());
console.log(fruits.values());