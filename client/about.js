const cartCount = document.getElementById("cart-count");

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

getCount();