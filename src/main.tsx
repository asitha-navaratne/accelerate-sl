import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import StarField from "./components/StarField/StarField.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/accelerate-sl">
      <App />
      <StarField />
    </BrowserRouter>
  </StrictMode>
);
