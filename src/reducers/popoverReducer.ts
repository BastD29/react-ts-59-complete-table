import { SET_POPOVER, UNSET_POPOVER } from "../constants/actions";
import { PopoverAction } from "../models/action";
import { PopoverType } from "../models/popover2";

const initialPopoverState: PopoverType = {
  popoverContent: undefined,
  // popoverTarget: undefined,
  popoverTarget: null,
  //   position: "bottom",
  //   offset: 10,
};

const popoverReducer = (
  state: PopoverType,
  action: PopoverAction
): PopoverType => {
  switch (action.type) {
    case SET_POPOVER:
      if (state.popoverTarget === action.payload.ref && state.popoverContent) {
        return initialPopoverState;
      } else {
        return {
          ...state,
          popoverContent: action.payload.content,
          popoverTarget: action.payload.ref,
          position: action.payload.position,
          offset: action.payload.offset,
        };
      }
    case UNSET_POPOVER:
      return initialPopoverState;
    default:
      return state;
  }
};

export { popoverReducer, initialPopoverState };
