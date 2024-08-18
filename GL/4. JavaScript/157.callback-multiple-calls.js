const sum = (x,y,cb)=>{
    setTimeout(()=>{
        cb(x+y);
    },2000);
    return;
};

console.log(sum(10,20,function(result){
    console.log(result);  //returns 30
    sum(result, 40, function(result){
        console.log(result);  //return (10+20)+40=70
    });
}));

