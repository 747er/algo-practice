let cart = {
  discounts: [
    {
      type: "flat",
      amount: 1000,
    },
    {
      type: "percent",
      amount: 5,
    },
  ],
  items: [
    {
      title: "Product One",
      id: 22,
      weight: 12,
      price: 2200,
      product_discount: 200,
    },
    {
      title: "Product One",
      id: 456,
      weight: 12,
      price: 3100,
      product_discount: 100,
    },
  ],
  original_total_price: function () {
    let price = this.items.reduce((agg, curr) => {
      return (agg += curr.price);
    }, 0);

    return price;
  },
  total_discount: function () {
    let discounts = {
      lineItemDiscounts: this._calculateLineItemDiscounts(),
      percent: 0,
      flat: 0,
    };

    for (let i = 0; i < this.discounts.length; i++) {
      switch (this.discounts[i].type) {
        case "flat":
          discounts.flat += this.discounts[i].amount;
          break;
        case "percent":
          discounts.percent += this.discounts[i].amount;
      }
    }

    return this._calculateTotalDiscounts(discounts);
  },

  _calculateTotalDiscounts(discounts) {
    let originalTotalPrice = this.original_total_price();

    // REMOVE FLAT DISCOUNTS BEFORE PERCENTAGE
    originalTotalPrice =
      originalTotalPrice - discounts.lineItemDiscounts - discounts.flat;

    return originalTotalPrice * (1 - discounts.percent / 100);
  },

  _calculateLineItemDiscounts: function () {
    let lineItemDiscount = this.items.reduce((agg, curr) => {
      return (agg += curr.product_discount);
    }, 0);

    return lineItemDiscount;
  },
};

// NO DISCOUNTS OR LINE ITEMS
// ALL DISCOUNTS
// cart.cart.total_discount = () => {};

// ORIGNAL - DISCOUNTS
// cart.total_price = () => {};

// console.log(cart.original_total_price());
// console.assert(
//   cart.original_total_price() === 5300,
//   `${cart.original_total_price()} does not equal 5300`
// );

console.log(cart.total_discount());
