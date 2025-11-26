import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import HeaderImageLink from "./components/score-image";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeaderImageLink />
  </StrictMode>
);
