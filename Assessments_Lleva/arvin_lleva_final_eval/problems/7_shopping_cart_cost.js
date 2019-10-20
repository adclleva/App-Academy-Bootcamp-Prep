/**************************************************************************************
Write a function `shoppingCartCost(cart, prices)` that takes in two objects:
 - an object representing items and their quantities in a shopping cart
 - an object representing items and their prices

The function should return the total cost of items in the shopping cart.

Examples:

var prices = {bread: 4, butter: 6, milk: 3, eggs: 7, celery: 1};
var cart1 = {bread : 2, milk: 1, eggs : 1};
var cart2 = {milk: 2, celery: 5};

shoppingCartCost(cart1, prices); // => 18
shoppingCartCost(cart2, prices); // => 11

Difficulty: Medium
*************************************************************************************/

function shoppingCartCost(cart, prices) {
  var totalCost = 0; // we start our cost with 0

  for (var item in cart) { // we iterate through each item in the cart object
    var numberOfItems = cart[item]; // we obtain the number of iterms for that particular item
    var price = prices[item]; // we obtain the price of that particular item
    var totalPriceForItems = price * numberOfItems; // we get the total price for the items

    totalCost += totalPriceForItems; // we add it to the total cost
  }

  return totalCost; // we return the total cost
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = shoppingCartCost;
