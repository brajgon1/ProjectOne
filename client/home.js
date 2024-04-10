// first function emailSignUp
let signUp = document.getElementById("sign-up");
let input = document.querySelector("input");
let footer = document.querySelector("footer");
let emailButton = document.getElementById("emailBtn"); 
let deleteThing = document.getElementById("signupbtnstuff");
let addToCartBtn = document.querySelectorAll(".cartBtn");
let cartCounter = document.getElementById("cart-count");
let count = 0;
console.log(addToCartBtn.length)
let shoeData = [];
const container = document.getElementById('shoeContainer');
console.log(container);

function emailSignUp() {
    let text = document.createElement("h3");
    text.textContent = "Thank you for signing up " + input.value + " !";
    footer.appendChild(text);
    deleteThing.remove();
}
emailButton.addEventListener("click", emailSignUp); 

function addToCart() {
    count += 1;
    if (count === 1) {
        cartCounter.textContent = count + " Shoe"
    } else {
        cartCounter.textContent = count + " Shoes"
    } 

    localStorage.setItem('cartCount', count);
}
   
addToCartBtn.forEach((button) => {
    button.addEventListener("click", addToCart)
})


function getAllShoeData() {
    axios.get("http://localhost:4000/api/shoes")
    .then(shoes => {
      displayShoeData(shoes.data);
    })
  }

  function displayShoeData(shoeData) {
    const shoeCards = shoeData.map(shoe => {
        console.log(shoeData)
        let shoeCard = document.createElement('div');
        shoeCard.className = "shoeCard";
        let name = document.createElement('h3');
        name.className = "name";
        name.innerHTML = shoe.name
        let price = document.createElement('h3');
        price.innerHTML = shoe.price
        price.className = "price";
        let button = document.createElement('button');
        button.innerHTML = "Add to Cart"
        button.className = "cartBtn";
        button.onclick = function () {
            // create endpoint below
            axios.post("http://localhost:4000/api/cart", shoe)
            .then(res => {
                // function call that sends a parameter called "res.data.cart.length"
            })
        }
        let image = document.createElement('img');
        image.src = shoe.imageURL;
        image.alt = shoe.alt;
        shoeCard.appendChild(image);
        shoeCard.appendChild(name);
        shoeCard.appendChild(price);
        shoeCard.appendChild(button);
        container.appendChild(shoeCard)
    })
  }

//   create function - target the span with ID cart-count that inserts the data that comes from a parameter
  
  

window.onload = function() {
      let storedCount = localStorage.getItem('cartCount');
      if (storedCount) {
          count = parseInt(storedCount); // Convert to integer
          cartCounter.textContent = count + (count === 1 ? " Shoe" : " Shoes");
      }

      getAllShoeData();

  };
