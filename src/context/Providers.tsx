import { FC, ReactNode } from "react";
import { FilterProvider } from "./FilterContext/FilterProvider2";
import { ModalProvider } from "./ModalContext/ModalProvider2";
import { PopoverProvider } from "./PopoverContext/PopoverProvider2";
import { RowsProvider } from "./RowsContext/RowsProvider";
import { SortProvider } from "./SortContext/SortProvider";

const providers = [
  SortProvider, // outermost provider
  RowsProvider,
  FilterProvider,
  PopoverProvider,
  ModalProvider, // innermost provider
];

type ProviderProps = {
  children: ReactNode;
};

const Providers: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      {/* When using reduceRight (instead of reduce), we start from the last provider in the array (SortProvider) and
      move towards the first one (ModalProvider). This ensures that the first provider in the
      array is the outermost provider, and the last provider in the array is the
      innermost provider, wrapping around the children (in this case, the App
      component) */}
      {/* // ! however, this approach does not solve the problem of the order of providers. */}
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Providers;
