import { Link } from "react-router";
import { Nav } from "../styles/nav.style";

export default function NavBar({ displayedText }) {
  return (
    <>
      <Nav>
        <p>{displayedText}</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/shopPage">Shop</Link>
          <Link to="/cartPage">Cart</Link>
        </div>
      </Nav>
    </>
  );
}
