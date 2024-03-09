import { StrictMode } from "react";
import { Root, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const domRoot = document.getElementById("root");

const root: Root = createRoot(domRoot!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
