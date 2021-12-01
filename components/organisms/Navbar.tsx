import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Button from "components/atoms/Button";

const MobileTopNavbarWrapper = styled.nav`
  z-index: 999;
  height: 50px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 4.5rem;
  cursor: pointer;
  img {
    aspect-ratio: 4 / 3;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;
const MobileTopNavbar = () => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <MobileTopNavbarWrapper>
      <Logo onClick={handleLogoClick}>Bookpill</Logo>

      <StyledButton>Wypróbuj za darmo</StyledButton>
    </MobileTopNavbarWrapper>
  );
};

export default MobileTopNavbar;
