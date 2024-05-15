import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./style/index.scss";
import { ModalProvider } from "./context/ModalContext/ModalProvider.tsx";
import { PopoverProvider } from "./context/PopoverContext/PopoverProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PopoverProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </PopoverProvider>
  </React.StrictMode>
);
