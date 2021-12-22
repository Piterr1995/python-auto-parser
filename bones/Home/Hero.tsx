import styled, { keyframes } from "styled-components";
import { Translations } from "enums";
import { useTranslation } from "next-i18next";
import Button from "components/atoms/Button";
import parse from "html-react-parser";
import { theme, breakpoints } from "style/theme";
const PhonesImage = "/images/phones.png";

const gradientAnimation = keyframes`
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }

`;

const slideUp = (start: number, end: number) => keyframes`
   
      0% {
        transform: translateY(${start}%);
      }
      100% {
        transform: translateY(${end}%);
      }
    
`;

const Container = styled.div`
  --navbar-height: 7rem;
`;

const StyledH1 = styled.h1`
  font-size: var(--xxl);
  font-weight: 500;
`;

const Navbar = styled.nav`
  z-index: 3;
  color: white;
  font-size: 2.2rem;
  padding: var(--normalPadding);
  font-weight: 700;
  /* position: absolute; */
  top: 0;
  /* height: 7rem; */
  height: var(--navbar-height);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-weight: 600;
    color: white;
    border: 2px solid white;
  }
  @media screen and ${theme.breakpoints.bigTablet} {
    .book-pill-logo-text {
      font-size: var(--l);
    }
  }
`;

const HeroSection = styled.div`
  --gradientContainerHeight: calc(37vh + 10vw - var(--navbar-height));

  position: relative;
  /* height: calc(var(--gradientContainerHeight) + 200px); */

  .gradient-container {
    width: 100%;
    height: var(--gradientContainerHeight);
    position: absolute;

    canvas {
      z-index: -1;
      transform: skewY(-9deg);
      width: 100%;
      height: 200%;
      background: linear-gradient(
        -60deg,
        var(--purple100),
        var(--purple100) 23%,
        var(--blue100) 50%,
        var(--cyan100) 80%,
        var(--green200)
      );
      background-size: 300% 300%;
      transform-origin: 0 100%;
      position: absolute;
      bottom: 0;
      animation: ${gradientAnimation} 7s ease-in-out infinite alternate;
    }
  }
  .hero-data {
    padding-top: calc(var(--gradientContainerHeight) - 125px);
    display: grid;
    grid-gap: 3rem;

    .text {
      display: grid;
      grid-gap: 3rem;

      h1 {
        line-height: 6rem;
      }

      p {
        font-size: var(--s);
        color: #505050;
        line-height: 3rem;
      }

      b {
        font-weight: 600;
      }
      button {
        width: 75%;
        border: 3px solid var(--black300);
        font-size: var(--s);
        font-weight: 700;
      }
    }

    .image-container {
      position: relative;
      text-align: center;
      transition: 1s ease;
      height: 400px;
      z-index: 10;
      /* animation: slideUp 1s ease forwards; */
      img {
        width: 100%;
        margin: auto;
        animation: ${slideUp(20, 0)} 1s ease forwards;
      }
    }
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    .hero-data {
      grid-template-columns: repeat(2, 1fr);
      padding-top: calc(var(--gradientContainerHeight) - 20rem);

      .text {
        grid-gap: 3rem;

        h1 {
          font-size: 8rem;
          line-height: 8rem;
        }

        p {
          width: 80%;
          font-size: var(--s);
          line-height: 4rem;
        }

        button {
          font-size: var(--s);
        }
      }

      .image-container {
        animation: ${slideUp(20, -10)} 1s ease forwards;
        img {
          width: 90%;
        }
      }
    }
  }

  @media screen and ${theme.breakpoints.desktop} {
    .gradient-container {
      height: calc(var(--gradientContainerHeight) - 1rem);
    }
    .hero-data {
      padding-top: calc(var(--gradientContainerHeight) - 32rem);

      .text {
        grid-gap: 4rem;
        h1 {
          font-size: 12rem;
          line-height: 12rem;
        }

        p {
          font-size: 2rem;
          line-height: 4rem;
        }

        button {
          font-size: var(--m);
        }
      }

      .image-container {
        img {
          /* height: 167%; */
          position: absolute;
          width: 100%;
          left: 10rem;
        }
      }
    }
  }
`;

const Hero = () => {
  const { t } = useTranslation(Translations.MAIN);
  const handleScrollToPillExamples = () => {
    const examples = document.getElementById("examples");
    examples?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <Navbar className="container">
        <span className="book-pill-logo-text">BookPill</span>
        <Button tertiary onClick={handleScrollToPillExamples}>
          Wypróbuj za darmo
        </Button>
      </Navbar>
      <HeroSection>
        <div className="gradient-container">
          <canvas />
        </div>
        <div className="container">
          <div className="hero-data">
            <div className="text">
              <StyledH1 className="no-space">
                {t("home_hero_section_title")}
              </StyledH1>
              <p className="no-space">
                {parse(t("home_hero_section_subtitle"))}
              </p>
              <Button tertiary small onClick={handleScrollToPillExamples}>
                Wypróbuj za darmo
              </Button>
            </div>
            <div className="image-container">
              <img src={PhonesImage} alt="1" />
            </div>
          </div>
          {/* <h1 className="hero-header">Hello</h1> */}
        </div>
      </HeroSection>
    </Container>
  );
};

export default Hero;
