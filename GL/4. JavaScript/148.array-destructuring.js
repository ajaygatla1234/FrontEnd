const cities=['Hyderabad','Bengaluru'];
const first = cities[0], second=cities[1], third=cities[2];
console.log(first, second, third);

//arrays destructuring
const [city1, city2]=cities;
console.log(city1,city2);

//with default values
const[cityOne, cityTwo, cityThree='pune']=cities;
console.log(cityOne, cityTwo,cityThree);
