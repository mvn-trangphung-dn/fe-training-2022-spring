let isUpdate, products, nameProductUpdate;
nameProductUpdate = JSON.parse(localStorage.getItem('nameProductUpdate')) || null;
products = JSON.parse(localStorage.getItem('products')) || [];

document.addEventListener("DOMContentLoaded", function(event) { 
  isUpdate = !!nameProductUpdate;
  if (isUpdate) {
    let product = findProductUpdate(nameProductUpdate);
    renderForm(product);
  }
});

function findProductUpdate(nameProductUpdate) {
  let product = products.filter(item => item.name === nameProductUpdate);
  return product[0];
}

function renderForm(product) {
  document.getElementById("nameProd").value = product.name;
  document.getElementById("priceProd").value = product.price;
  document.getElementById("imgProd").value = product.img;

}

function submitProduct() {
  let nameProd = document.getElementById("nameProd").value;
  let priceProd = document.getElementById("priceProd").value;
  let imgProd = document.getElementById("imgProd").value;
  console.log("oldName, nameProd", nameProd);
  let product = {
    name: nameProd,
    price: priceProd,
    img: imgProd
  }
  if (!nameProd || !priceProd || !imgProd) {
    alert("You must enter name, price and image!");
  } else {
    if (isUpdate) {
      let productOld = products.find((prod) => prod.name === nameProductUpdate);
      productOld.name = nameProd;
      productOld.price = priceProd;
      productOld.img = imgProd;
      console.log("olf", products.find((prod) => prod.name === nameProd));
      localStorage.setItem('products', JSON.stringify(products));
      alert("Update product is successfully!");
      window.location = "../product-list/product-list.html";
      // if (!(products.some((prod) => prod.name === nameProd))) {
      // } else {
      //   alert("Product is exist!");
      // }
    } else {
      if (!(products.some((prod) => prod.name === nameProd))) {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        alert("Add new product is successfully!");
        window.location = "../product-list/product-list.html";
      } else {
        alert("Product is exist!");
      }
    }
  }
}
