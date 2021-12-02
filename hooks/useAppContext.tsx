import { useContext } from "react";

import AppContext from "contexts/AppContext";

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};
