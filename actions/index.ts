import { Alerts, AuthModals } from "enums";
export const TOGGLE_DARK_THEME = "TOGGLE_DARK_THEME";
export const TOGGLE_READER_FONT_SIZES = "TOGGLE_READER_FONT_SIZES";
export const HANDLE_WINDOW_WIDTH_CHANGE = "HANDLE_WINDOW_WIDTH_CHANGE";

export const handleWindowResize = (dispatch: any, type: any) => {
  window.addEventListener("resize", () =>
    dispatch({
      type: type,
    })
  );
};

export const handleWindowResizeCleanup = (dispatch: any, type: any) => {
  window.removeEventListener("resize", () => dispatch({ type: type }));
};

export const AuthModalAction = class AuthModalAction {
  static SHOW_MODAL = "SHOW_MODAL";

  static showLoginRegisterModal = () => {
    return {
      type: AuthModalAction.SHOW_MODAL,
      payload: {
        type: AuthModals.LOGIN_OR_REGISTER,
      },
    };
  };
  static showPasswordForgetModal = () => {
    return {
      type: AuthModalAction.SHOW_MODAL,
      payload: {
        type: AuthModals.PASSWORD_FORGET,
      },
    };
  };

  static closeAllModals = () => {
    return {
      type: AuthModalAction.SHOW_MODAL,
      payload: {
        type: AuthModals.NONE,
      },
    };
  };
};

export const AlertAction = class AlertAction {
  static SHOW_ALERT = "SHOW_ALERT";

  static showSuccessAlert = (message: string) => {
    return {
      type: AlertAction.SHOW_ALERT,
      payload: { message, type: Alerts.SUCCESS },
    };
  };

  static showErrorAlert = (message: string) => {
    return {
      type: AlertAction.SHOW_ALERT,
      payload: { message, type: Alerts.ERROR },
    };
  };
};
