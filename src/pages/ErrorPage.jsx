import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <>
      <h1>This page is doesn't exist</h1>
      <Link to="/">Back to home</Link>
    </>
  );
}
