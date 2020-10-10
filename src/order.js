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

function listItems(listToPrint) {
  var list = [];
  for (var i = 0; i < listToPrint.length; i++) {
    list.push(listToPrint[i].item)
  }
  return list.toString().replace(/,/g, ', ');
}

function searchOrder(listToSearch, item) {
  for (var i = 0; i < listToSearch.length; i++) {
    if (listToSearch[i].item === item) {
      return true;
    }
  }
  return false;
}

module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
