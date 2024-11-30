import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { App as CapacitorApp } from "@capacitor/app";

createRoot(document.getElementById("root")).render(<App />);

CapacitorApp.addListener("backButton", ({ canGoBack }) => {
  if (canGoBack) {
    window.history.back();
  } else {
    App.exitApp().catch((e) => console.error(e));
  }
});
