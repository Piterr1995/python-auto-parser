import MobileTopNavbar from "./bones/MobileTopNavbar";
import { useAppContext } from "hooks/useAppContext";
import { Breakpoints } from "enums";

const Navbar = () => {
  const { state } = useAppContext();

  if (state.windowWidth < Breakpoints.BIG_TABLET) {
    return <MobileTopNavbar />;
  } else {
    return <></>;
  }
};

export default Navbar;
