/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {number} totalPrice
 */

export const totalPrice = (products) => {
  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return total.toFixed(2);
};
