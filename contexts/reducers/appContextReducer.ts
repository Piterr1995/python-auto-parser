import { HANDLE_WINDOW_WIDTH_CHANGE } from "actions";
import { AlertAction, AuthModalAction } from "actions";

const appContextReducer = (state: any, action: any) => {
  switch (action.type) {
    case HANDLE_WINDOW_WIDTH_CHANGE:
      return { ...state, windowWidth: window.innerWidth };
    case AuthModalAction.SHOW_MODAL:
      return {
        ...state,
        authModalShower: action.payload,
      };
    case AlertAction.SHOW_ALERT:
      return {
        ...state,
        alertShower: action.payload,
      };
    default:
      return state;
  }
};

export default appContextReducer;
