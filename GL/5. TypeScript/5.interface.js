//Define a circle object
//Define a function to calculate the area of a shape
var circle = {
    name: "Circle",
    color: "Red",
    area: function () {
        return Math.PI * 2 * 2;
    },
};
console.log("Use case 1:Defining object structures");
console.log("-----------------------------------");
function calculateArea(shape) {
    console.log("Calculating area of ".concat(shape.name, "..."));
    console.log("Area:".concat(shape.area()));
}
//Calculate and log the area of the circle
calculateArea(circle);
