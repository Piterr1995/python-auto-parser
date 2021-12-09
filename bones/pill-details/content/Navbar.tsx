import styled from "styled-components";
import { BsMoonStars, BsSun, BsListOl } from "react-icons/bs";

import { BiFontSize } from "react-icons/bi";
import { IoLibrarySharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

import { useAppContext } from "hooks/useAppContext";
import { Breakpoints, Routes } from "enums";

type NavbarProps = {
  isVisible: boolean;
  isDarkTheme: boolean;
  handleFontSizeChange: () => void;
  handleToggleIsChaptersModalVisible: () => void;
  handleToggleIsDarkTheme: () => void;
};

type MobileNavbarStyledComponentProps = {
  isVisible: boolean;
  isDarkTheme: boolean;
};
const MobileNavbar = styled.nav<MobileNavbarStyledComponentProps>`
  z-index: 1;
  width: 100vw;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? "var(--bootstrapDark)" : "white"};
  color: ${({ isDarkTheme }) => (isDarkTheme ? "white" : "inherit")};
  height: 80px;
  padding: 15px 10px;
  position: sticky;
  top: 0;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  /* justify-content: center; */
  align-items: center;
`;

const NavbarItem = styled.div`
  text-align: center;
  display: inline-block;
  width: 25%;
`;

const Navbar = ({
  isVisible,
  isDarkTheme,
  handleFontSizeChange,
  handleToggleIsChaptersModalVisible,
  handleToggleIsDarkTheme,
}: NavbarProps) => {
  const { state } = useAppContext();

  const mobileNavbarItems = [
    // {
    //   handleClick: () => {
    //     window.location.href = Routes.LIBRARY;
    //   },
    //   icon: <IoLibrarySharp size={50} />,
    // },
    {
      handleClick: () => {
        window.location.href = Routes.HOME;
      },
      icon: <AiOutlineHome size={50} />,
    },
    {
      handleClick: handleToggleIsChaptersModalVisible,

      icon: <BsListOl size={50} />,
    },
    {
      handleClick: handleToggleIsDarkTheme,

      icon: isDarkTheme ? <BsMoonStars size={50} /> : <BsSun size={50} />,
    },
    {
      handleClick: handleFontSizeChange,

      icon: <BiFontSize size={50} />,
    },
  ];
  return (
    <>
      {state.windowWidth < Breakpoints.BIG_TABLET ? (
        <MobileNavbar isDarkTheme={isDarkTheme} isVisible={isVisible}>
          {mobileNavbarItems.map((item, index) => (
            <NavbarItem onClick={item.handleClick} key={index}>
              {item.icon}
            </NavbarItem>
          ))}
        </MobileNavbar>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
