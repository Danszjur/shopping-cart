export default function CardElement({ product }) {
  return (
    <div>
      <img src={product.url} alt={product.title} />
      <div>
        <p>{product.title}</p>
        <div>
          <button>-</button>
          <input type="text" />
          <button>+</button>
        </div>
        <div>{product.price}</div>
      </div>
    </div>
  );
}
