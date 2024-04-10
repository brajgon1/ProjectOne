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
    // local storage
    localStorage.setItem('cartCount', count);
}

addToCartBtn.forEach((button) => {
    button.addEventListener("click", addToCart)
})

// look at local storage to store items in cart. Need to look at local storage when crossing the diff tabs

window.onload = function() {
      let storedCount = localStorage.getItem('cartCount');
      if (storedCount) {
          count = parseInt(storedCount); // Convert to integer
          cartCounter.textContent = count + (count === 1 ? " Shoe" : " Shoes");
      }
  };