var message="This is the rhythm of the life";
var  len;
len=message.length;
console.log("Length = "+len);
//charAt()
var char=message.charAt(2);
console.log("Char at index 2 : "+char);
var ucase=message.toUpperCase();
console.log("Uppercase : "+ucase);
var lcase=message.toLowerCase();
console.log("Lowercase : "+lcase);
console.log();

//replace
var rplStr1 = message.replace('the',"The");
console.log("Replaced value : "+rplStr1);
console.log("Actual value : "+message);

console.log();

var rplStr2=message.replace(/the/g,"The");
console.log("replace()-with Regular Expression:\n "+rplStr2);
console.log(message);

console.log();

var rplStr3=message.replaceAll("the","The");
console.log(rplStr3);

console.log();

var rplStr4=message.replaceAll(/the/g,"The");
console.log("replace()-with Regular Expression:\n "+rplStr4);
console.log();
//indexOf
console.log(message.indexOf("the"));
console.log();
//lastIndexOf
console.log(message.lastIndexOf("the"));
var substr=message.substring(2,6);
console.log(substr);
console.log();
//split() - returns a string array
var splStr=message.split(" ");
console.log(splStr);
