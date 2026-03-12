import { Link } from "react-router";
import { Nav } from "../styles/Nav.style";
import ItemCounter from "./ItemCounter";

export default function NavBar({ displayedText, value }) {
  return (
    <>
      <Nav>
        <p>{displayedText}</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/shopPage">Shop</Link>
          <Link to="/cartPage">Cart</Link>
        </div>
        <ItemCounter num={value} />
      </Nav>
    </>
  );
}
