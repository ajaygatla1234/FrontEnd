let sum = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(10);
    }, 3000);
});

sum
    .then((result)=>{
        console.log(result); //10
        return result+20;
    })

    .then((result)=>{
        console.log(result); //30
        return result+30;
    })

    .then((result)=>{
        console.log(result); //60
        return result+30;
    })
