let signUp = document.getElementById("sign-up");
let input = document.querySelector("input");
let footer = document.querySelector("footer");
let emailButton = document.getElementById("emailBtn");
let deleteThing = document.getElementById("signupbtnstuff");
let addToCartBtn = document.querySelectorAll(".cartBtn");
let cartCounter = document.getElementById("cart-count");
let checkout = document.getElementById("checkOut");
let count = 0;
let cartCount = document.getElementById("cart-count");
let shoeData = [];
let image = document.querySelector("image");
const container = document.getElementById("shoeContainer");


function emailSignUp() {
  let text = document.createElement("h3");
  text.textContent = " Thank you for signing up " + input.value + " !";
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
    image.className = "shoeImage";
    image.addEventListener("click", () => getLarger(shoe.imageURL));
    image.src = shoe.imageURL;
    image.alt = shoe.alt;
    shoeCard.appendChild(image);
    shoeCard.appendChild(name);
    shoeCard.appendChild(price);
    shoeCard.appendChild(button);
    container.appendChild(shoeCard);
  });
}

function getLarger(imageURL) {
  const myModal = document.getElementById("myModal");
  const modalImage = document.getElementById('modalImg')
  myModal.style.display = "block";
  modalImage.src = imageURL;
  console.log(modalImg)
}

const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", x);
function x() {  
  const myModal = document.getElementById("myModal");
  myModal.style.display = "none";
}

getAllShoeData();
getCount();
