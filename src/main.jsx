import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "mobx-react";
import { wordStore } from "./wordStore/wordStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider wordStore={wordStore}>
      <App />
    </Provider>
  </StrictMode>
);
