let num1=10;
console.log('num1:'+num1);

let num2=20;
console.log('num2:'+num2);

var num3=20;
console.log('var num3:'+num3);

var num3=50; //valid
console.log('var num3:'+num3);

{
    let num4=90;
    console.log("num4 in a block : "+num4);
    var num5=100;
}

//console.log("num4 outside a block : "+num4);
console.log("var num5 outside a block : "+num5);