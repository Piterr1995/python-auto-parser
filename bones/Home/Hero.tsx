import styled, { keyframes } from "styled-components";
import { Translations } from "enums";
import { useTranslation } from "next-i18next";
import Button from "components/atoms/Button";
import parse from "html-react-parser";

const PhonesImage = "/images/phones.png";

const GradientAnimation = keyframes`
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }

`;

const HeroSection = styled.div`
  --gradientContainerHeight: calc(35vh + 10vw);

  position: relative;
  /* height: calc(var(--gradientContainerHeight) + 200px); */

  .gradient-container {
    width: 100%;
    height: var(--gradientContainerHeight);
    position: absolute;
    overflow: hidden;

    canvas {
      z-index: -1;
      transform: skewY(-13deg);
      width: 100%;
      height: 100%;
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
      animation: ${GradientAnimation} 7s ease-in-out infinite alternate;
    }
  }
  .hero-data {
    /* position: absolute; */
    padding-top: calc(var(--gradientContainerHeight) - 135px);
    display: grid;
    grid-gap: 30px;

    h1 {
      line-height: 6rem;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    b {
      font-weight: 600;
    }
    button {
      width: 50%;
      border: 3px solid var(--black300);
      font-size: 1.6rem;
      font-weight: 700;
    }
    .image-container {
      position: relative;
      text-align: center;
      transition: 1s ease;
      /* transform: translateY(20%); */
      height: 400px;
      animation: image-animation 1s ease forwards;
      img {
        width: 100%;
        /* height: 100% !important; */
        margin: auto;
      }
    }

    @keyframes image-animation {
      0% {
        transform: translateY(20%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  }
`;

const Hero = () => {
  const { t } = useTranslation(Translations.MAIN);
  return (
    <>
      <HeroSection>
        <div className="gradient-container">
          <canvas />
        </div>
        <div className="container">
          <div className="hero-data">
            <h1 className="no-space xxl">{t("home_hero_section_title")}</h1>
            <p className="no-space">{parse(t("home_hero_section_subtitle"))}</p>
            <Button tertiary small>
              Kontakt
            </Button>
            <div className="image-container">
              <img src={PhonesImage} alt="1" />
            </div>
          </div>
          {/* <h1 className="hero-header">Hello</h1> */}
        </div>
      </HeroSection>
    </>
  );
};

export default Hero;
