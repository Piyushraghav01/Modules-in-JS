// variables and functions
var cart = [];

let total = 0;

function calculateTotal() {
  total = cart.reduce((acc, item) => acc + item.price, 0);
}

function addItem(item) {
  cart.push(item);
  calculateTotal();
}

function getTotal() {
  return total;
}
function getCartContents() {
  return cart;
}

addItem({ id: 1, pName: 'Product1', price: 10 });
addItem({ id: 2, pName: 'Product2', price: 20 });
addItem({ id: 3, pName: 'Product3', price: 30 });

//get the cart container
const cartItems = document.getElementById('cart-items');

//Display the cart items
const cartContent = getCartContents();
cartContent.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item.pName} - $${item.price}`;
  cartItems.appendChild(listItem);
});

// Get the total price element
const totalPriceElement = document.getElementById('total-price');
// Display the total price
totalPriceElement.textContent = `Total: $${getTotal()}`;
