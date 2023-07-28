// components/calculateTotal.js
const calculateSubtotal = (item) => {
  const { totalItem, price } = item;

  return (totalItem * price).toFixed(2);
};

const calculateTotal = (item) => {
  const { totalItem, price, tax, discount } = item;
  const subtotal = totalItem * price;
  const totalTax = subtotal + (subtotal / 100);
  const totalAfterTax = subtotal + totalTax;
  const totalAfterDiscount = totalAfterTax - (totalAfterTax * (discount / 100));

  return totalAfterDiscount.toFixed(2);

};

export { calculateSubtotal, calculateTotal };
