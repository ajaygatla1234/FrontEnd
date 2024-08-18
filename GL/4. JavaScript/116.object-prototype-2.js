var obj={
    x:1
}

var proto={
    y:2
}

Object.setPrototypeOf(obj, proto);
console.log(obj);
console.log(obj.__proto__);
