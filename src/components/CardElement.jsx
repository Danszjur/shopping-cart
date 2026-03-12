import { useState } from "react";
import { Card } from "../styles/Card.style";
import { QuantityButton, AddToCartButton } from "../styles/Buttons.style";

export default function CardElement({ product, BtnOnClick }) {
  const [quantity, setQuantity] = useState(1);

  function addToQuantity(number) {
    if (number + quantity <= 0 || quantity < 0) {
      setQuantity(0);
      return;
    }
    setQuantity(quantity + number);
  }

  return (
    <>
      <Card>
        <img src={product.url} alt={product.title} />
        <div>
          <p>{product.title}</p>
          <div>
            <QuantityButton onClick={() => addToQuantity(-1)}>-</QuantityButton>
            <input className="quantity-input" type="text" value={quantity} />
            <QuantityButton onClick={() => addToQuantity(1)}>+</QuantityButton>
          </div>
          <div className="card-bottom-part">
            <AddToCartButton onClick={() => BtnOnClick(product, quantity)}>
              In Cart
            </AddToCartButton>
            <p>{product.price} Ft</p>
          </div>
        </div>
      </Card>
    </>
  );
}
