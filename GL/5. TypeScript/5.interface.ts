interface Shape{
    name:string;
    color:string;
    area():number;
}
//Define a circle object
//Define a function to calculate the area of a shape
const circle:Shape={
    name:"Circle",
    color:"Red",
    area(){
        return Math.PI*2*2;
    },
};

console.log("Use case 1:Defining object structures");
console.log("-----------------------------------");
function calculateArea(shape:Shape):void{
    console.log(`Calculating area of ${shape.name}...`);
    console.log(`Area:${shape.area()}`);
}
//Calculate and log the area of the circle
calculateArea(circle);