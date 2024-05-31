import { FC, ReactNode, useReducer } from "react";
import { PopoverContext } from "./PopoverContext2";
import Popover from "../../components/Popover/Popover2";
import {
  initialPopoverState,
  popoverReducer,
} from "../../reducers/popoverReducer";
import useClickOutside from "../../hooks/useOutsideClick";
import { UNSET_POPOVER } from "../../constants/actions";

type PopoverProviderProps = {
  children: ReactNode;
};

export const PopoverProvider: FC<PopoverProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(popoverReducer, initialPopoverState);

  useClickOutside(state.popoverTarget, () => dispatch({ type: UNSET_POPOVER }));

  return (
    <PopoverContext.Provider value={{ state, dispatch }}>
      {children}
      {state.popoverContent && state.popoverTarget && (
        <Popover
          children={state.popoverContent}
          targetRef={state.popoverTarget}
          position={state.position}
          offset={state.offset}
        />
      )}
    </PopoverContext.Provider>
  );
};
