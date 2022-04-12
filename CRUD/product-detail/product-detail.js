let action, product, products, namelocalStorage;
document.addEventListener("DOMContentLoaded", function(event) { 
  namelocalStorage = JSON.parse(localStorage.getItem('nameProductDetail')) || [];
  products = JSON.parse(localStorage.getItem('products')) || [];
  product = products.filter(item => item.name === namelocalStorage);
  renderProductDetail(product[0]);
});

function renderProductDetail(product) {
  let productDetailEle = document.getElementById("productDetail");
  let html = '';
  html += `<div class="col-6 wapper-img">
              <img src="${product.img}" alt="img">
            </div>
            <div class="col-6 wapper-info">
              <h2>${product.name}</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, velit et cum a quae nesciunt vel obcaecati cupiditate aliquid. Dolore nobis rerum temporibus provident dignissimos laudantium, nemo atque placeat nihil!</p>
              Price: <span class="price">$${product.price}</span>
              <button class="btn btn-delete" onClick="deleteProduct('${product.name}')">Delete</button>
              <button class="btn btn-primary" onClick="UpdateProduct('${product.name}')">Update</button>
            </div>
          </div>`;
  productDetailEle.innerHTML = html;
}

function deleteProduct(name) {
  products = products.filter(item => item.name !== name);
  localStorage.setItem('products', JSON.stringify(products));
  window.location = "../product-list/product-list.html";
  alert("Delete new product is successfully!");
}

function UpdateProduct(name) {
  let namelocalStorage = JSON.parse(localStorage.getItem('nameProductUpdate')) || [];
  namelocalStorage = name;
  localStorage.setItem('nameProductUpdate', JSON.stringify(namelocalStorage));
  window.location = "../product-form/product-form.html";
}
