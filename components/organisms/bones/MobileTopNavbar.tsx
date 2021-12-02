import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Button from "components/atoms/Button";

const MobileTopNavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  display: inline-block;
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
