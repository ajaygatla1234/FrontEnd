sum(10,20);  //calling sum function before the function declaration

function sum(num1,num2){
    var sum;
    sum=num1+num2;
    console.log("Sum="+sum);
    //return sum;
}

   // sum(10,20); //calling sum function after the function declaration
         //or
    // var result  //using variable to store the function
    // result=sum(10,20);
    // console.log("Sum="+result);