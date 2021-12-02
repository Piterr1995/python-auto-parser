import styled, { keyframes } from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useAppContext } from "hooks/useAppContext";
import { Translations } from "enums";
import Button from "components/atoms/Button";
import Hero from "bones/Home/Hero";
import Pros from "bones/Home/Pros";
import Quote from "bones/Home/Quote";
import Spacer from "components/atoms/Spacer";
import Examples from "bones/Home/Examples";
import Demo from "bones/Home/Demo";
import Footer from "components/organisms/Footer";
const PhonesImage = "/phones.png";

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
        #b760f1,
        #b760f1 23%,
        #23a6d5 50%,
        #23d5ab 80%,
        #1f9c53
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
    margin-top: calc(var(--gradientContainerHeight) - 135px);
    display: grid;
    grid-gap: 30px;
    /* left: 0; */
    /* right: auto; */
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
      height: 400px;
      img {
        width: 100%;
        /* height: 100% !important; */
        margin: auto;
      }
    }
  }
`;

const ProsAndConsSection = styled.div``;

const Home = () => {
  const { state } = useAppContext();
  const { t } = useTranslation(Translations.MAIN);
  return (
    <>
      <Hero />
      <Spacer y={8} />
      <Pros />
      <Quote
        text={t("home_first_quote_text")}
        author={t("home_first_quote_author")}
      />
      <Examples />
      <Spacer y={12} />

      <Demo />
      <Quote
        text={t("home_second_quote_text")}
        author={t("home_second_quote_author")}
      />
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [Translations.MAIN])),
    },
  };
}
