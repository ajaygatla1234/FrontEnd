const strProducts = `[
    {
        "name":"Mobile Phone",
        "description":"Cellular Smart Phone",
        "price":12450.00,
        "rating":{
            "min":1,
            "max":5
        }
    },

    {
        "name":"Laptop",
        "description":"Ryzen 5000 series, 512 SSD",
        "price":62500
    }
]`;

//JSON.parse is to convert into an equivalent js object
var products = JSON.parse(strProducts);
console.log(products);    //output comes with alignment & colors
console.log(strProducts); //output comes with no alignment & no colors

var newProduct={
    "name":"Earbuds",
    "description":"One Plus",
    price : 43500.76
};

//add newProduct to products array
products.push(newProduct);
console.log("Products array[]\n");
console.log(products);

var strProductsStringify = JSON.stringify(products);
console.log("Products array[] converted into String \n");
console.log(strProductsStringify);

