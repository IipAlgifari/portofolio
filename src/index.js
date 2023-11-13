import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "presentation/container/app";
import "core/style/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
