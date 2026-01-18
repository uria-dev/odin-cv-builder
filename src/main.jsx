import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LeftSide from "./edit-side.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LeftSide />
  </StrictMode>
);
