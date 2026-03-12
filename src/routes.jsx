import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import App from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
    ],
  },
];

export default routes;
