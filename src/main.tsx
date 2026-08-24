import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// NOTE: StrictMode is intentionally disabled — this template's GSAP
// ScrollSmoother/ScrollTrigger setup is not safe under dev double-mounting.
createRoot(document.getElementById("root")!).render(<App />);
