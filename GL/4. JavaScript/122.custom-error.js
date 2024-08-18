function sum(num1,num2){
   // if(typeof num1==='number' && num2!=='number'){
       if(isNaN(num1)||isNaN(num2)){
            throw new Error("Not a Number! Parameters should be numbers");
        }
        else{
            return num1+num2;
        }
    }

    try{
        console.log(sum("$10","$20"));
    }
    catch(error){
       console.log(error.message);
    }
