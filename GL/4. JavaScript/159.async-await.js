async function myFunction(){
    let promise = new Promise((resolve,reject)=> {
        setTimeout(()=> resolve("Done..!"),1000)
    });

    let result = await promise; //wait until the promise resolves
    console.log (result); //"done1"
}
myFunction();