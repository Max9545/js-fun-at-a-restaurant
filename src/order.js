function takeOrder(foodOrder, list) {
  if (list.length < 3) {
    list.push(foodOrder);
  }
}




module.exports = {
   takeOrder,
   // refundOrder,
   // listItems,
   // searchOrder
}
