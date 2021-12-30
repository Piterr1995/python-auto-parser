import MobileTopNavbar from "./bones/MobileTopNavbar";
import BigScreenNavbar from "./bones/BigScreenNavbar";
import { useAppContext } from "hooks/useAppContext";
import { Breakpoints } from "enums";
import { useRouter } from "next/router";

const Navbar = () => {
  const { state } = useAppContext();
  const router = useRouter();

  const getNavbar = () => {
    if (router.pathname === "/" || router.pathname.includes("content")) {
      return null;
    } else if (state.windowWidth < Breakpoints.BIG_TABLET) {
      return <MobileTopNavbar />;
    } else {
      return <BigScreenNavbar />;
    }
  };

  return <>{getNavbar()}</>;
};

export default Navbar;
