const num=20;
console.log(num);
//num++;//error
const obj={
    num2 : 20,
}
//update num2-property of a const obj can be changed
obj.num2++;
console.log('num2 of obj const:'+obj.num2);
//changing a value of an const object by re assigning the property

//obj={
    //num2=100;//error

//};