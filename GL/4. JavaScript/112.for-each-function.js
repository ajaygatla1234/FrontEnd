var sum=0;
const numbers = [65,44,12,4];

function myFunction(num){
    sum+=num;
}

numbers.forEach(myFunction);

console.log(sum);