import { useOutletContext } from "react-router";
import CardElement from "../components/CardElement";

export default function Cart() {
  const { itemsInCart } = useOutletContext();
  return (
    <>
      <main></main>
    </>
  );
}
