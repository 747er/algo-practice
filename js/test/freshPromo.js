function foo(codeList, shoppingCart) {
  // Write your code here
  let codesIndex = 0;
  let cartIndex = 0;

  while (codesIndex < codeList.length && cartIndex < shoppingCart.length) {
    const codeListItem = codeList[codesIndex].split(" ");
    let codeListItemIndex = 0;

    while (
      codeListItemIndex < codeListItem.length &&
      cartIndex < shoppingCart.length
    ) {
      if (
        codeListItem[codeListItemIndex] === "anything" ||
        codeListItem[codeListItemIndex] === shoppingCart[cartIndex]
      ) {
        codeListItemIndex = codeListItemIndex + 1;
      } else {
        codeListItemIndex = 0;
      }
      cartIndex++;
    }

    if (codeListItemIndex !== codeListItem.length) return 0;
    codesIndex++;
  }
  if (codeList.length > codesIndex) {
    return 0;
  }
  return 1;
}
