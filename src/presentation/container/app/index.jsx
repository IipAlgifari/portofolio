import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "core/config/routes";

const App = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;