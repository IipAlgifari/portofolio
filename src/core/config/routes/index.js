import Home from "presentation/container/page/Home";
import Shop from "presentation/container/page/Shop";
import About from "presentation/container/page/About";
import Contact from "presentation/container/page/Contact";
import Blog from "presentation/container/page/Blog";
import DetailProduct from "presentation/container/page/DetailProduct";
import MyAccount from "presentation/container/page/MyAccount";

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
];

export default routeConfig;
