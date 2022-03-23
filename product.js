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

