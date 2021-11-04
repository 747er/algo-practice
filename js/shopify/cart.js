let cart = {
  currency: "USD",

  discounts: [
    {
      title: "Welcome10",
      amount: 10,
      type: "fixed",
    },
    {
      title: "BOGOHO",
      amount: 50,
      itemId: 456,
      type: "percent",
    },
  ],

  items: [
    {
      title: "Product One",
      id: 22,
      weight: 12,
      price: 1200,
      product_discount: 200,
    },
    {
      title: "Product One",
      id: 456,
      weight: 12,
      price: 3000,
      product_discount: 100,
    },
  ],

  //   TOTAL PRICE WITH NO DISCOUNTS
  original_total_price() {
    // MOST BASIC
    // const self = this;
    // let total = 0;
    // for (let i = 0; i < self.items.length; i++) {
    //   total += self.items[i].price;
    // }

    // REDUCE
    const sum = this.items.reduce((total, currentItem) => {
      return total + currentItem.price;
    }, 0);
    return sum;
  },

  //   TOTAL PRICE AFTER APPLYING DISCOUNTS
  total_price() {
    return this.original_total_price() - this.total_discount();
  },

  //   SUM OF ALL DISCOUNTS APPLIED
  total_discount() {
    const lineItemDiscount = this.__line_item_discounts();

    return lineItemDiscount;
  },

  __line_item_discounts() {
    const discount = this.items.reduce((total, currItem) => {
      return (total +=
        currItem.product_discount > 0 ? currItem.product_discount : 0);
    }, 0);
    return discount;
  },
};

// console.log(cart.original_total_price());
// console.log(cart.total_price());

const originalTotalPrice = cart.original_total_price();
console.assert(
  cart.original_total_price() === 4200,
  `Original Total Price of ${originalTotalPrice} does not equal 4200`
);
