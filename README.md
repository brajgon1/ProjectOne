# Basics of this Project
In this basic E-commerce site you can add shoes to a cart, which will display on the "Cart" tab as well as increment at the top of the page.
You can also swap between the tabs "Home" and "About" after adding to the cart and the number you added in the cart will remain the same.
When your cursor goes over the images they enlarge a bit, but when clicked on they get even larger, dimming the background.
There is an Email signup where you can input your Email. This will delete the sign up input and replace it with a message.
You can "purchase" the shoes by clicking the "checkout" button in the cart tab. This deletes the container holding the shoes, which is replaced with a message.

# FRONT END
Site responsive, includes styling

# SERVER
GET, POST and DELETE requests used.
Express, Axios and Cors utilized. Also includes a Controller file. No database was used, but a JSON file was created for the data of the different shoes.

# Languages
HTML, CSS, JavaScript

# HIGHLIGHTED CODE
The below code was used to create the "shoe cards" in JavaScript rather than using it in HTML
///
```function displayShoeData(shoeData) {
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
}```
///

Here is an example of the DELETE request used to "purchase" the shoes
///
```checkoutBtn.addEventListener("click", () => {
  axios.delete("http://localhost:4000/api/cart").then((res) => {
    const shoeContainer = document.getElementById("shoeContainer");
    shoeContainer.innerHTML = "Thank you for your purchase! See you next time!";
  });
});```
///

Here is how I was able to get the cart count to stay the same from swapping between the Home and About tabs
///
```function setCount(count) {
  cartCount.innerHTML = count;
  localStorage.setItem("cartCount", count);
}```

```function getCount() {
  let storedCount = localStorage.getItem("cartCount");
  if (storedCount) {
    count = parseInt(storedCount);
    setCount(count);
  }
}```
///
