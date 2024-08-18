const marks=[98,33,96,40,100];

function findDistinction(mark){
    if(mark>=95 && mark<=100){
        console.log("Distinction");
    }
    else{
        console.log("Not Distinction");
    }
}
marks.filter(findDistinction);