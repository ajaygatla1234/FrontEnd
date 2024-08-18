const primes = new Set([1,2,3,3,3,34,5,7,11,13,17]);   //set cannot have duplicate values
console.log(primes);
console.log("Number of Elements "+primes.size);
primes.add(21);
console.log(primes.size);
console.log(primes);
console.log(primes.has(3));
primes.delete(5);
console.log(primes.size);