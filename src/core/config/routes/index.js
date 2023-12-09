import Home from "presentation/container/page/Home";
import Shop from "presentation/container/page/Shop";
import About from "presentation/container/page/About";
import Contact from "presentation/container/page/Contact";
import Blog from "presentation/container/page/Blog";
import DetailProduct from "presentation/container/page/DetailProduct";
import MyAccount from "presentation/container/page/MyAccount";
import Cart from "presentation/container/page/Cart";
import ProductComparison from "presentation/container/page/ProductComparison";
import Checkout from "presentation/container/page/Checkout";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Halaman tidak ditemukan</h1>,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/detail-product",
    element: <DetailProduct />,
  },
  {
    path: "/my-account",
    element: <MyAccount />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/comparison",
    element: <ProductComparison />,
  },
];

export default routeConfig;
