var globalScope = 1;
function someFunc() {
    var functionScope = 2;
    if (true) {
        var blockScope = 3;
        console.log(globalScope);
        console.log(functionScope);
        console.log(blockScope);
    }
    console.log(globalScope);
    console.log(functionScope);
    //console.log(blockScope); //error
}
console.log(globalScope);
