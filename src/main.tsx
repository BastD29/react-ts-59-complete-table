import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App2.tsx";
import { ModalProvider } from "./context/ModalContext/ModalProvider.tsx";
import { PopoverProvider } from "./context/PopoverContext/PopoverProvider.tsx";
import "./style/index.scss";
import { FilterProvider } from "./context/FilterContext/FilterProvider.tsx";
import { RowsProvider } from "./context/RowsContext/RowsProvider.tsx";
import { SortProvider } from "./context/SortContext/SortProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SortProvider>
      <RowsProvider>
        <FilterProvider>
          <PopoverProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </PopoverProvider>
        </FilterProvider>
      </RowsProvider>
    </SortProvider>
  </React.StrictMode>
);
