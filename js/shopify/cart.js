let cart = {
  currency: "USD",

  discounts: [
    {
      title: "Welcome10",
      amount: 1000,
      type: "fixed",
    },
    {
      title: "BOGOHO",
      amount: 10,
      type: "percent",
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

  //   TOTAL PRICE WITH NO DISCOUNTS
  original_total_price() {
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
    let discounts = {
      fixed: 0,
      percent: 0,
      lineItem: this.__calculate_line_item_discounts(),
    };

    for (let i = 0; i < this.discounts.length; i++) {
      switch (this.discounts[i].type) {
        case "fixed":
          discounts["fixed"] += this.discounts[i].amount;
          break;
        case "percent":
          discounts["percent"] += this.discounts[i].amount;
          break;
      }
    }

    percentDiscount =
      (this.original_total_price() -
        discounts["lineItem"] -
        discounts["fixed"]) *
      (discounts["percent"] / 100);

    const discount =
      discounts["fixed"] + discounts["lineItem"] + percentDiscount;

    return discount;
  },

  __calculate_line_item_discounts() {
    const discount = this.items.reduce((total, currItem) => {
      return (total +=
        currItem.product_discount > 0 ? currItem.product_discount : 0);
    }, 0);
    return discount;
  },
};

const originalTotalPrice = cart.original_total_price();
console.log("originalTotalPrice: ", originalTotalPrice);
console.assert(
  cart.original_total_price() === 5300,
  `Error: Original Total Price of ${originalTotalPrice} does not equal 5300`
);

const totalDiscounts = cart.total_discount();
console.log("totalDiscounts: ", totalDiscounts);

console.assert(
  cart.total_discount() === 1700,
  `Error: Total Discount of ${totalDiscounts} does not equal 1700`
);

const totalPrice = cart.total_price();
console.log("total price: ", totalPrice);
console.assert(
  cart.total_price() === 3600,
  `Error: Total Discount of ${totalPrice} does not equal 3600`
);
