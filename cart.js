var products, cartProducts;
document.addEventListener("DOMContentLoaded", function(event) { 
  products = JSON.parse(localStorage.getItem('products')) || [];
  cartProducts = JSON.parse(localStorage.getItem('listCart')) || [];
  renderCart();
});

function renderCart() {
  var htmlString = "";
  for(var i in cartProducts) {
    htmlString += `<tr>
                  <td>${cartProducts[i].name}</td>
                  <td>(${cartProducts[i].price})</td>
                  <td>
                    <div class="input-group">
                      <button class="minus-item input-group-addon btn btn-primary" data-name="${cartProducts[i].name}" onClick="decreaseItemCart('${cartProducts[i].name}')">-</button>
                      <input type="number" class="item-count form-control" data-name="${cartProducts[i].name}" value="${cartProducts[i].quantity}">
                      <button class="plus-item btn btn-primary input-group-addon" data-name="${cartProducts[i].name}" onClick="increaseItemCart('${cartProducts[i].name}')">+</button>
                    </div>
                  </td>
                  <td><button class="delete-item btn btn-danger" onclick="removeItemFromCart('${cartProducts[i].name}')">X</button></td>
                  </tr>`;
  }
  document.getElementById('showCart').innerHTML = htmlString;
  document.getElementById('totalCart').innerHTML = totalCart();
}

function totalCart() {
  var totalCart = 0;
  for(var item in cartProducts) {
    totalCart += (parseInt(cartProducts[item].price) * parseInt(cartProducts[item].quantity));
  }
  return Number(totalCart.toFixed(2));
}

function removeItemFromCart(name) {
  cartProducts = cartProducts.filter(item => item.name !== name);
  localStorage.setItem('listCart', JSON.stringify(cartProducts));
  renderCart();
}

function increaseItemCart(name) {
  var productIndex = cartProducts.findIndex(item => item.name === name);
  cartProducts[productIndex].quantity += 1;
  localStorage.setItem('listCart', JSON.stringify(cartProducts));
  renderCart();
}

function decreaseItemCart(name) {
  var productIndex = cartProducts.findIndex(item => item.name === name);
  if (cartProducts[productIndex].quantity - 1 > 0) {
    cartProducts[productIndex].quantity -= 1;
  } else {
    removeItemFromCart(name);
  }

  localStorage.setItem('listCart', JSON.stringify(cartProducts));
  renderCart();
}

