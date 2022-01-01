import styled from "styled-components";
import { useRouter } from "next/router";
import { theme } from "style/theme";

const NavbarWrapper = styled.div`
  /* background: var(--lightgray200); */
  background: white;
  border-bottom: 1px solid var(--lightgray200);
`;
const Navbar = styled.div`
  z-index: 3;
  padding: var(--normalPadding);
  font-weight: 700;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .book-pill-logo-text {
    background: linear-gradient(to right, var(--green100), var(--blue100));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: var(--l);
    cursor: pointer;
  }
`;

const MobileTopNavbar = () => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <NavbarWrapper>
      <Navbar className="container">
        <div
          className="book-pill-logo-text"
          onClick={handleLogoClick}
          role="button"
        >
          Bookpill
        </div>
      </Navbar>
    </NavbarWrapper>
  );
};

export default MobileTopNavbar;
