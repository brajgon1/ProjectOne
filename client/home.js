// first function emailSignUp
let signUp = document.getElementById("sign-up");
let input = document.querySelector("input");
let footer = document.querySelector("footer");
let emailButton = document.getElementById("emailBtn");
let deleteThing = document.getElementById("signupbtnstuff");
let addToCartBtn = document.querySelectorAll(".cartBtn");
let cartCounter = document.getElementById("cart-count");
let checkout = document.getElementById("checkOut");
let count = 0;
const cartCount = document.getElementById("cart-count");
let shoeData = [];
const container = document.getElementById("shoeContainer");
console.log(container);

function emailSignUp() {
  let text = document.createElement("h3");
  text.textContent = "Thank you for signing up " + input.value + " !";
  footer.appendChild(text);
  deleteThing.remove();
}
emailButton.addEventListener("click", emailSignUp);

function setCount(count) {
  cartCount.innerHTML = count;
	localStorage.setItem("cartCount", count);
}

function getCount() {
		let storedCount = localStorage.getItem("cartCount");
		if (storedCount) {
			count = parseInt(storedCount);
			setCount(count);
		}
}

function getAllShoeData() {
  axios.get("http://localhost:4000/api/shoes").then((shoes) => {
    displayShoeData(shoes.data);
  });
}

function displayShoeData(shoeData) {
  shoeData.map((shoe) => {
    let shoeCard = document.createElement("div");
    shoeCard.className = "shoeCard";
    let name = document.createElement("h3");
    name.className = "name";
    name.innerHTML = shoe.name;
    let price = document.createElement("h3");
    price.innerHTML = shoe.price;
    price.className = "price";
    let button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.className = "cartBtn";
    button.onclick = function () {
      axios.post("http://localhost:4000/api/cart", shoe).then((res) => {
        setCount(res.data.length);
      });
    };
    let image = document.createElement("img");
    image.src = shoe.imageURL;
    image.alt = shoe.alt;
    shoeCard.appendChild(image);
    shoeCard.appendChild(name);
    shoeCard.appendChild(price);
    shoeCard.appendChild(button);
    container.appendChild(shoeCard);
  });
};


// work to create a way to click checkout and have it delete the cart and return a message saying thank you for your purchase //
function checkoutSubmitBtn() {
  let text = document.createElement("h3");
  text.textContent = "Thank you for your purchase!";
  footer.appendChild(text);
  // deleteThing.remove();
}
// checkOut.addEventListener("click", checkoutSubmitBtn);

getAllShoeData();
getCount()