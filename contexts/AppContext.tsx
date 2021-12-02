import React, { useReducer, useEffect, useMemo, useCallback } from "react";

import { throttle } from "throttle-debounce";
import { ThemeProvider } from "styled-components";

import appContextReducer from "./reducers/appContextReducer";
import { GlobalStyle } from "style/globalStyle";
import { theme } from "style/theme";
import { HANDLE_WINDOW_WIDTH_CHANGE } from "actions";
import { Alerts, AuthModals } from "enums";

type InitialState = {
  windowWidth: number;
  authModalShower: {
    type: AuthModals[keyof AuthModals];
  };
  alertShower: {
    type: Alerts[keyof Alerts];
    message: string;
  };
};

const initialAppContextState = {
  windowWidth: 550,
  authModalShower: {
    type: AuthModals.NONE,
  },
  alertShower: {
    type: Alerts.NONE,
    message: "",
  },
};

const AppContext = React.createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({ state: initialAppContextState, dispatch: () => null });

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(
    appContextReducer,
    initialAppContextState
  );
  const [memoizedState, memoizedDispatch] = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  );

  let throttledSetResizeListener = useCallback(
    throttle(1000, () => {
      dispatch({ type: HANDLE_WINDOW_WIDTH_CHANGE });
    }),
    []
  );

  useEffect(() => {
    dispatch({ type: HANDLE_WINDOW_WIDTH_CHANGE });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", throttledSetResizeListener);

    return () =>
      window.removeEventListener("resize", throttledSetResizeListener);
  }, []);
  return (
    <AppContext.Provider
      value={{ state: memoizedState, dispatch: memoizedDispatch }}
    >
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContext;
