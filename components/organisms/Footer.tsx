import styled from "styled-components";

const FacebookLink = styled.a`
  text-decoration: none;
  color: #3b5998;

  :hover {
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <h1 className="container">
      Bądź z nami na bieżąco na{" "}
      <FacebookLink href="https://www.facebook.com/bookpillproject">
        Facebooku
      </FacebookLink>{" "}
      !
    </h1>
  );
};

export default Footer;
