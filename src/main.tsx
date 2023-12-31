import ReactDOM from "react-dom/client";
import Context from "./Context.tsx";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Context>
      <App />
    </Context>,
  );
}
