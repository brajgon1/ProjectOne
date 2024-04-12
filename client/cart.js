const container = document.getElementById("shoeContainer");

axios.get("http://localhost:4000/api/cart").then((res) => {
console.log(res.data);
displayShoeData(res.data);
});

function deleteShoe(id) {
    axios.delete(`http://localhost:4000/api/shoes/${id}`).then((res) => {
        console.log(res.data);
        getAllShoeData();
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
    button.innerHTML = "Delete";
    button.className = "cartBtn";
    button.onclick = function () {
    deleteShoe(shoe.id);
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
}
