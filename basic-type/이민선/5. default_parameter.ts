{
  type PaymentMethod = "credit-card" | "mobile-pay" | "cash";
  type Item = "egg" | "coffee" | "noodle";

  type Receipt = {
    shoppingList: Item[];
    payment: PaymentMethod;
  };

  function makeReceipt(
    itemToAdd: Item,
    // shoppingList라는 매개변수에 인자를 전달하지 않은 경우 default parameter로 빈 배열이 할당된다.
    shoppingList: Item[] = [],
    // payment라는 매개변수에 인자를 전달하지 않은 경우 default parameter로 빈 배열이 할당된다.
    payment: PaymentMethod = "credit-card"
  ): Receipt {
    shoppingList.push(itemToAdd);
    return {
      shoppingList,
      payment,
    };
  }
  console.log(makeReceipt("coffee", ["coffee", "noodle"], "mobile-pay"));
  // shopping list와 payment에 인자를 전달하지 않으면 default parameter로 설정된 값들이 반환된다.
  console.log(makeReceipt("egg"));
}
