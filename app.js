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

function randomProductIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

//write a function to render our images
//have the images be chosen randomly from our Product.allproducts array
// use randomProductIndex() and bracket notation to access the item in the array

function renderImages() {
  //get three random indexes for my product array
  let index1 = randomProductIndex();
  let index2 = randomProductIndex();
  let index3 = randomProductIndex();

  //make sure none of them are the same
  while (index1 === 2 || index1 === index3 || index2 === index3) {
    index2 = randomProductIndex();
    index3 = randomProductIndex();
  }

  //retrieve our image elements
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");

  // change the src attribute of img1, img2 & img3 to be the src from our random products
  img1.src = Product.allProducts[index1].src;
  img2.src = Product.allProducts[index2].src;
  img3.src = Product.allProducts[index3].src;

  img1.alt = Product.allProducts[index1].name;
  img2.alt = Product.allProducts[index2].name;
  img3.alt = Product.allProducts[index3].name;
}

function handleClick(event) {
  //increase the clicks on the clicked product object (for looop and click ++(check the alt of the event.target.all)
  // make sure the user is clicking on one of the images
  if (event.target === imgContainer) {
    alert("wrong spot, please click ON one of the images");
    return; //this return stops the function
  }
  //check every single products "name" against the alt of the target and increase the clicks
  for (let i = 0; i < Product.allProducts.length; i++) {
    console.log(Product.allProducts[i]);
    if (event.target.alt === Product.allProducts[i].name) {
      Product.allProducts[i].clicks++;
      break; //stop the loop because we found the product
    }
  }
  renderImages();
}

const imgContainer = document.getElementById("img-container");
imgContainer.addEventListener("click", handleClick);

renderImages();
