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
  itemsSum: function () {
    let total = this.items.reduce((agg, curr) => {
      return agg + curr.price;
    }, 0);
    return total;
  },
  totalDiscounts: function () {
    let discounts = {
      product: this.items.reduce((agg, curr) => {
        return agg + curr.product_discount;
      }, 0),
      flat: 0,
      percent: 0,
    };

    for (const discount of this.discounts) {
      switch (discount.type) {
        case "flat":
          discounts.flat += discount.amount;
          break;
        case "percent":
          discounts.percent += discount.amount;
      }
    }

    const percentDiscount =
      (this.itemsSum() - discounts["product"] - discounts["flat"]) *
      (discounts["percent"] / 100);

    const discount =
      discounts["fixed"] + discounts["product"] + percentDiscount;

    return (
      (this.itemsSum() - flatDiscounts) * (discounts.percent / 100) +
      flatDiscounts
    );
  },
};

console.log(cart.itemsSum());
console.log(cart.totalDiscounts());
