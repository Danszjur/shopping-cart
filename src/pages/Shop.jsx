import NavBar from "../components/NavBar";
import CardElement from "../components/CardElement";
import { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProduct();
  }, []);

  return (
    <>
      <NavBar displayedText="Shop" />
      <main className="shop-main">
        {products.map((product) => (
          <CardElement
            key={product.id}
            product={{
              title: product.title,
              price: product.price,
              url: product.image,
            }}
          />
        ))}
      </main>
    </>
  );
}
