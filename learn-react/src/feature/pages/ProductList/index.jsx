import { useEffect, useState } from "react";
import ProductItem from "../../modules/ProductItem";

export default function ProductList() {

  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    const fetchData = () => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((data) => setProductList(data.data));
    };
  
    fetchData();
  }, []);

  return (
    <main className="container content-wapper page-main page-product-list">
      <h1 className="page-title">Product List</h1>
      <ul className="row">
        {productList.map((product) => (
          <li className="col-4" key={product.id}>
            <ProductItem product={product}/>
          </li>
        ))}
      </ul>
    </main>
  );
}
