import { createRoot } from "react-dom/client";
import { App } from "./app/App";

import "./app/styles/index.scss";
import { ThemeProvider } from "./entities/ThemeProvider";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Div element with id 'root' does not exist");

const reactRoot = createRoot(rootElement);
reactRoot.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
