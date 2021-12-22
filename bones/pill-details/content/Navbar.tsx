import styled from "styled-components";
import { BsMoonStars, BsSun, BsListOl } from "react-icons/bs";

import { BiFontSize } from "react-icons/bi";
import { IoLibrarySharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

import { useAppContext } from "hooks/useAppContext";
import { Breakpoints, Routes } from "enums";
import { theme } from "style/theme";

type NavbarProps = {
  isVisible: boolean;
  isDarkTheme: boolean;
  handleFontSizeChange: () => void;
  handleToggleIsChaptersModalVisible: () => void;
  handleToggleIsDarkTheme: () => void;
};

type StyledNavbarStyledComponentProps = {
  isVisible: boolean;
  isDarkTheme: boolean;
};
const StyledNavbar = styled.nav<StyledNavbarStyledComponentProps>`
  z-index: 1;
  width: 100vw;
  /* background: ${({ isDarkTheme }) =>
    isDarkTheme ? "var(--bootstrapDark)" : "#f4f4f4"}; */
  background: ${({ isDarkTheme }) =>
    isDarkTheme ? "var(--bootstrapDark)" : "inherit"};
  color: ${({ isDarkTheme }) => (isDarkTheme ? "white" : "inherit")};
  height: 80px;
  padding: 15px 10px;
  position: sticky;
  top: 0;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;

  @media screen and ${theme.breakpoints.bigTablet} {
    --text-content-width: 700px;
    --navbar-width: 5.5rem;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ isDarkTheme }) => (isDarkTheme ? "white" : "inherit")};

    padding: 0;
    height: 30rem;
    width: var(--navbar-width);
    left: calc(
      50% - calc(var(--text-content-width) / 2) -
        calc(var(--navbar-width) / 2 + 2rem)
    );
    top: 50%;
    transform: translate(-60%, -60%);
  }
`;

const NavbarItem = styled.div`
  text-align: center;
  display: inline-block;
  width: 25%;

  @media screen and ${theme.breakpoints.bigTablet} {
    width: 100%;
    &:hover {
      cursor: pointer;
      color: var(--green100);
    }
  }
`;

const Navbar = ({
  isVisible,
  isDarkTheme,
  handleFontSizeChange,
  handleToggleIsChaptersModalVisible,
  handleToggleIsDarkTheme,
}: NavbarProps) => {
  const { state } = useAppContext();

  const navbarItems = [
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
    <StyledNavbar isDarkTheme={isDarkTheme} isVisible={isVisible}>
      {navbarItems.map((item, index) => (
        <NavbarItem onClick={item.handleClick} key={index}>
          {item.icon}
        </NavbarItem>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
