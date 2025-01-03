const shoppingCart = (function() {
    // Private variables and functions
    let cart = [];
    let total = 0;
  
    function calculateTotal() {
      total = cart.reduce((acc, item) => acc + item.price, 0);
    }
  
    // Public methods
    return {
      addItem: function(item) {
        cart.push(item);
        calculateTotal();
      },
      getTotal: function() {
        return total;
      },
      getCartContents: function() {
        return cart;
      },
      
    };
  })();

shoppingCart.addItem({ id: 1, name: "Product 1", price: 10 });
shoppingCart.addItem({ id: 2, name: "Product 2", price: 20 });
shoppingCart.addItem({ id: 3, name: "Product 3", price: 30 });

// Get the cart container element
const cartItemsElement = document.getElementById("cart-items");

// Display the cart contents
const cartContents = shoppingCart.getCartContents();
cartContents.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${item.name} - $${item.price}`;
  cartItemsElement.appendChild(listItem);
});

// Get the total price element
const totalPriceElement = document.getElementById("total-price");

// Display the total price
totalPriceElement.textContent = `Total: $${shoppingCart.getTotal()}`;