import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shopPage",
    element: <Shop />,
  },
  {
    path: "cartPage",
    element: <Cart />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
