let objs = [
  {
    name: "name product 1",
    price: "100",
    img: "https://i.pinimg.com/474x/68/9e/c6/689ec6b9b673c36d270b957513bfa5b3.jpg"
  },
  {
    name: "name product 2",
    price: "200",
    img: "https://i.pinimg.com/474x/74/12/37/74123763eba98266945d4714a431223c.jpg"
  },
  {
    name: "name product 3",
    price: "300",
    img: "https://i.pinimg.com/474x/d2/0b/83/d20b836d40c36cfb170341392f7ca5ce.jpg"
  },
  {
    name: "name product 4",
    price: "400",
    img: "https://i.pinimg.com/474x/ed/09/a9/ed09a970cc3dc27d17f9061552e57256.jpg"
  },
  {
    name: "name product 5",
    price: "100",
    img: "https://i.pinimg.com/474x/68/9e/c6/689ec6b9b673c36d270b957513bfa5b3.jpg"
  },
  {
    name: "name product 6",
    price: "200",
    img: "https://i.pinimg.com/474x/74/12/37/74123763eba98266945d4714a431223c.jpg"
  },
  {
    name: "name product 7",
    price: "300",
    img: "https://i.pinimg.com/474x/d2/0b/83/d20b836d40c36cfb170341392f7ca5ce.jpg"
  },
  {
    name: "name product 8",
    price: "400",
    img: "https://i.pinimg.com/474x/ed/09/a9/ed09a970cc3dc27d17f9061552e57256.jpg"
  }
];
let products;
document.addEventListener("DOMContentLoaded", function(event) { 
  products = JSON.parse(localStorage.getItem('products')) || [];
  localStorage.removeItem("nameProductUpdate");
  if (products.length === 0) {
    localStorage.setItem('products', JSON.stringify(objs));
    products = objs;
  }
  renderListProduct(products);
  let input = document.getElementById("inputSearch");
  input.addEventListener('keydown', searchProduct);
});

function renderListProduct(products) {
  let productListEle = document.getElementById("productList");
  let html = '';
  for (let i = 0; i < products.length; i++) {
    let name = `${products[i].name}`;
    html += `<li class="product-item col-3">
              <a href="#" class="product-img">
                <div class="wapper-product-img">
                  <img src="${products[i].img}" alt="prooduct img">
                </div>
              </a>
              <div class="product-info">
                <h3 class="product-name"><a href="">${products[i].name}</a></h3>
                <span class="product-price">$${products[i].price}</span>
              </div>
              <!-- btn btn-primary | class reuseable -->
              <button class="btn btn-primary" onClick="moveDetailPage('${name}')">View product</button>
            </li>`;
  }
  productListEle.innerHTML = html;
}

function moveDetailPage(name) {
  let namelocalStorage = JSON.parse(localStorage.getItem('nameProductDetail')) || [];
  namelocalStorage = name;
  localStorage.setItem('nameProductDetail', JSON.stringify(namelocalStorage));
  window.location = "../product-detail/product-detail.html";
}

function searchProduct(event) {
  if (event.target.matches('[name="search"]')) {
    let keyCode = event.keyCode || event.which;
    if (keyCode === 13) {
      event.preventDefault();
      let stringSearch = document.getElementById("inputSearch").value;
      let result = products.filter(item => item.name.includes(stringSearch));
      renderListProduct(result);
    }
  }
}