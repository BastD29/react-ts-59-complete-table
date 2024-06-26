import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App2.tsx";
// import { ModalProvider } from "./context/ModalContext/ModalProvider2.tsx";
// import { PopoverProvider } from "./context/PopoverContext/PopoverProvider2.tsx";
// import { FilterProvider } from "./context/FilterContext/FilterProvider2.tsx";
// import { RowsProvider } from "./context/RowsContext/RowsProvider.tsx";
// import { SortProvider } from "./context/SortContext/SortProvider.tsx";
import Providers from "./context/Providers.tsx";
import "./style/index.scss";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <SortProvider>
//       <RowsProvider>
//         <FilterProvider>
//           <PopoverProvider>
//             <ModalProvider>
//               <App />
//             </ModalProvider>
//           </PopoverProvider>
//         </FilterProvider>
//       </RowsProvider>
//     </SortProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
