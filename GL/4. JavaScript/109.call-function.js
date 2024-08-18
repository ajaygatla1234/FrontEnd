function add(x,y){
    return x+y;
}

console.log(add instanceof Function);   //true
//using this and call   
var result=add.call(this,10,20);  //runs in this context
console.log(result);  //30