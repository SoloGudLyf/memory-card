import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RenderImages } from "./components/renderImages";
import {Header} from "./components/header"

createRoot(document.getElementById("root")).render(<StrictMode>
  <Header/>
</StrictMode>);
RenderImages()