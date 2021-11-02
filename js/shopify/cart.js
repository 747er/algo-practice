let cart = {
  currency: "USD",
  discounts: [
    {
      title: "Welcome10",
      amount: 10,
      type: "fixed",
    },
  ],
  items: [
    {
      title: "Product One",
      weight: 12,
      price: 1200,
      product_discount: 200,
    },
  ],
  original_price() {
    return 12;
  },
  total_price() {
    // MOST BASIC
    // const self = this;
    // let total = 0;
    // for (let i = 0; i < self.items.length; i++) {
    //   total += self.items[i].price;
    // }

    // FILTER

    // REDUCE
    const sum = this.items.reduce((accumulator, currentValue) => {
      console.log(currentValue);
      return accumulator + currentValue.price;
    }, 0);
    return sum;

    // MAP

    // return total;
  },
  total_discount() {},
};

console.log(cart.total_price());
// console.assert(cart.original_price() === 11);
