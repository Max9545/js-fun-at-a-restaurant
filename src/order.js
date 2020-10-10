function takeOrder(foodOrder, list) {
  if (list.length < 3) {
    list.push(foodOrder);
  }
}

function refundOrder(cancelNumber, listToModify) {
  for (var i = 0; i < listToModify.length; i++) {
    if (cancelNumber === listToModify[i].orderNumber) {
      listToModify.splice(i, 1);
    }
  }
}


module.exports = {
   takeOrder,
   refundOrder,
   // listItems,
   // searchOrder
}
