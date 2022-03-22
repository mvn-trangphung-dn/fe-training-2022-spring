var objs = [
  {
    name: "name 1",
    price: "100"
  },
  {
    name: "name 2",
    price: "200"
  },
  {
    name: "name 3",
    price: "300"
  },
  {
    name: "name 4",
    price: "400"
  },
];
var products, cartProducts;
document.addEventListener("DOMContentLoaded", function(event) { 
  products = JSON.parse(localStorage.getItem('products')) || [];
  cartProducts = JSON.parse(localStorage.getItem('listCart')) || [];
  if (!products) {
    localStorage.setItem('products', JSON.stringify(objs));
    products = objs;
  }
  renderListProduct(products);
  countCart();
});

function renderListProduct(products) {
  var bodyTable = document.getElementById("bodyTable");
  var html = '';
  for (var i = 0; i < products.length; i++) {
    html += `<tr id="${products[i].name}">
              <td>${products[i].name}</td>
              <td>${products[i].price}</td>
              <td>
                <button type="button" onClick="deleteProduct('${products[i].name}')">Remove</button>
                <button type="button" onClick="addToCart('${products[i].name}', '${products[i].price}')">Add To Cart</button>
              </td>
            </tr>`;
  }
  bodyTable.innerHTML = html;
}

function newProduct() {
  var nameProd = document.getElementById("nameProd").value;
  var priceProd = document.getElementById("priceProd").value;
  
  if (!nameProd || !priceProd) {
    alert("You must enter name and price!");
  } else {
    productList = JSON.parse(localStorage.getItem('products'));
    if (!(productList.some((prod) => prod.name === nameProd))) {
      var trEle = document.createElement("tr");
      var tdName = document.createElement("td");
      var tdPrice = document.createElement("td");
      var tdAction = document.createElement("td");
      var product = {
        name: nameProd,
        price: priceProd
      }
  
      var nameValue = document.createTextNode(nameProd);
      var priceValue = document.createTextNode(priceProd);
      var htmlString = `<button type="button" onClick="deleteProduct('${nameProd}')">Remove</button>
                        <button type="button" onClick="addToCart('${nameProd}', '${priceProd}')">Add To Cart</button>`;
      
      tdAction.innerHTML = htmlString;
  
      tdName.appendChild(nameValue);
      trEle.appendChild(tdName);
      tdPrice.appendChild(priceValue);
      trEle.appendChild(tdPrice);
      trEle.appendChild(tdAction);
  
      document.getElementById("bodyTable").appendChild(trEle);
      productList.push(product);
      products = productList;
      localStorage.setItem('products', JSON.stringify(productList));
    } else {
      alert("Product is exist!");
    }
  }
}

function deleteProduct(name) {
  products = products.filter(item => item.name !== name);
  cartProducts = cartProducts.filter(item => item.name !== name);
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('listCart', JSON.stringify(cartProducts));
  renderListProduct(products);
  countCart();
}

function addToCart(name, price) {
  var product = {
    name: name,
    price: price,
    quantity: 1
  }
  var newItemCart = {};
  var item = cartProducts.filter(item => item.name === name);
  if (item.length > 0) {
    item[0].quantity += 1;
  } else {
    newItemCart = product;
    cartProducts.push(newItemCart);
  }
  localStorage.setItem('listCart', JSON.stringify(cartProducts));
  countCart();
}

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
  document.getElementById('show-cart').innerHTML = htmlString;
  document.getElementById('total-cart').innerHTML = totalCart();
}

function clearCart() {
  localStorage.setItem('listCart', JSON.stringify([]));
  cartProducts = [];
  countCart();
}

function countCart() {
  var count = cartProducts.reduce(function (a, b) {
    return {quantity: a.quantity + b.quantity};
  }, {quantity: 0});
  document.getElementById('totalCount').innerHTML = count.quantity;
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
  countCart();
}

function increaseItemCart(name) {
  var productIndex = cartProducts.findIndex(item => item.name === name);
  cartProducts[productIndex].quantity += 1;
  localStorage.setItem('listCart', JSON.stringify(cartProducts));
  renderCart();
  countCart();
}

function decreaseItemCart(name) {
  var productIndex = cartProducts.findIndex(item => item.name === name);
  if (cartProducts[productIndex].quantity - 1 > 0) {
    cartProducts[productIndex].quantity -= 1;
  } else {
    cartProducts = [];
  }

  localStorage.setItem('listCart', JSON.stringify(cartProducts));
  renderCart();
  countCart();
}

