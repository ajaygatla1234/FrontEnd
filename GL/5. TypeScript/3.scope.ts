let globalScope=1;
function someFunc(){
    let functionScope=2;
    if(true){
        let blockScope=3;
        console.log(globalScope);
        console.log(functionScope);
        console.log(blockScope);
    }
    console.log(globalScope);
    console.log(functionScope);
    //console.log(blockScope); //error
}
console.log(globalScope);
// console.log(functionScoper);  //error - without calling the function, functionScoper cannot be generated
// console.log(BlockScope);  //error