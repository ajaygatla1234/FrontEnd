const today=new Date();
console.log(today);
console.log();
//custom date
const date2=new Date(2022,12,1);
console.log(date2);
console.log();

//get date
console.log("Todays date : "+today.getDate());
console.log();
//get day
console.log("This Day : "+today.getDay());
console.log();
//get month
console.log("This Month : "+today.getMonth());
console.log();
//get year
console.log("This Year : "+today.getFullYear());
console.log();
//get time
console.log("Present time : "+today.getTime());
console.log();
//get hour
console.log("Present Hour : "+today.getHours());
console.log();
//get minute
console.log("Present Minute : "+today.getMinutes());
console.log();
//get seconds
console.log("Present Second : "+today.getSeconds());
console.log();
//get milliseconds
console.log("Present MilliSecond : "+today.getMilliseconds());
console.log();

console.log("Next Date");
today.setDate(today.getDate()+1);
console.log(today);
console.log();

//setters
today.setDate(9);  //8th of the month
console.log(today);
console.log();

//set year
today.setFullYear(2018,5,28);  //28th June, 2018
console.log(today);
console.log();

//set time as String
console.log(today.toTimeString());
console.log();

//set month
today.setMonth(11);  
console.log(today);

//set date
today.setDate(11);
console.log(today);

//add 10 days to today
today.setDate(today.getDate()+10);
console.log(today);

//set hours
today.setHours(10);
console.log(today);

//set minutes
today.setMinutes(11);

//set seconds
today.setSeconds(10);
console.log(today);

//set Milliseconds
today.setMilliseconds(18);
console.log(today);

//Compare dates
var text;
const today2=new Date();
const someday=new Date();
someday.setFullYear(2100,0,14);

if(someday>today2){
    msg="Today is before January 14, 2100";
}
else{
    msg="Today is after January 14, 2100";
}

console.log(msg);
