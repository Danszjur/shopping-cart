import icon from "../assets/cart.svg";
import { CartIcon } from "../styles/Nav.style";
import { Link } from "react-router";

export default function ItemCounter({ num }) {
  return (
    <Link to="/cartPage">
      <CartIcon>
        <img src={icon} alt="icon" />
        <p>{num}</p>
      </CartIcon>
    </Link>
  );
}
