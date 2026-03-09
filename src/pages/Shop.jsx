import NavBar from "../components/NavBar";
import CardElement from "../components/CardElement";
export default function Shop() {
  return (
    <>
      <NavBar displayedText="Shop" />
      <CardElement product={{ title: "kajak", price: 25, url: "#" }} />
    </>
  );
}
