import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 0;
  text-align: center;
`;
const FacebookLink = styled.a`
  text-decoration: none;
  color: #3b5998;

  :hover {
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <Container className="container">
      <h1>
        Bądź z nami na bieżąco na{" "}
        <FacebookLink href="https://www.facebook.com/bookpillproject">
          Facebooku
        </FacebookLink>{" "}
        !
      </h1>
    </Container>
  );
};

export default Footer;
