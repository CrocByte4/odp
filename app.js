//write a constructor function that accepts two parameters
//name
//Source

//this function should represent a product and also have two other properties
//clicks
//views
//that starts at 0

//lastly the constructor should have a property which is an array
//each time a new instance of the product is created it should push itself into the array

//call the constructor Product

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

new Product("camera", "images/camera.jpg");
new Product("mug", "images/mugshot.jpg");

//using this array create a new product for each item
// the name of the product should be the item in the array
// the src of the product should be like so:
//images/PRODUCTNAME.jpg;

const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

for (let i = 0; i < productNames.length; i++) {
  new Product(productNames[i], `images/${productNames[i]}.jpeg`);
}

//write a function that returns a random number
//the number will represent an index value for one of the items in the Product.allProducts array
// use google to help but not own previous work

function randomIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}
