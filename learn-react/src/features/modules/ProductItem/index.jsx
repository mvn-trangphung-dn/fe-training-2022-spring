export default function ProductItem({product}) {
  console.log(product);
  const { avatar, first_name, email } = product;

  return (
    <div className="product-item">
      <img className="product-avatar" src={avatar} alt={first_name} />
      <p className="product-name"><b>{first_name}</b></p>
      <p className="product-description">{email}</p>
    </div>
  );
}
