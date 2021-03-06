import styled from "styled-components";
import { useRouter } from "next/router";

const MobileTopNavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: white;
  border-bottom: 1px solid var(--lightgray200);

  .book-pill-logo-text {
    font-size: 2rem;
    font-weight: 700;

    background: linear-gradient(to right, var(--green100), var(--blue100));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: var(--l);
    cursor: pointer;
  }
`;

const Logo = styled.div`
  display: inline-block;
`;

const MobileTopNavbar = () => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <MobileTopNavbarWrapper>
      <div
        onClick={handleLogoClick}
        className="book-pill-logo-text"
        role="button"
      >
        Bookpill
      </div>
    </MobileTopNavbarWrapper>
  );
};

export default MobileTopNavbar;
