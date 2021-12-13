import { useState } from "react";

import styled, { css, keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { BiFontSize } from "react-icons/bi";
import { BsMoonStars, BsSun } from "react-icons/bs";

import { useToggle } from "hooks/useToggle";
import { Translations } from "enums";
import Wave from "components/atoms/Wave";
import Spacer from "components/atoms/Spacer";
import { theme } from "style/theme";
import Blob from "components/atoms/Blob";
const IphoneImage = "/images/iPhone.jpg";

const Container = styled.div`
  --image-width: 15rem;
  --image-height: 28rem;

  padding: 2rem auto 0;
  position: relative;
  text-align: center;
  width: 100%;
  overflow: hidden;
  svg {
    color: white;
  }

  .blob-container {
    display: none;
  }
  @media screen and ${theme.breakpoints.bigTablet} {
    --image-width: 20rem;
    --image-height: 40rem;

    padding-bottom: 5rem;

    .blob-container {
      --blob-container-width: 50rem;
      position: absolute;

      display: block;
      width: var(--blob-container-width);
      justify-content: space-around;
      z-index: 1;
      svg {
        width: 100%;
      }

      top: 30%;
      right: calc(-1 * var(--blob-container-width) / 1.5);
    }
  }
`;

const widthAnimation = keyframes`
  0% {
    width: 0%;
  }
  10% {
    width: 99%;
  }
  100% {
    width: 100%;
  }
`;
const ContentContainer = styled.div`
  .description,
  .title {
    color: white;
  }
  .description {
    font-weight: bold;
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(20, 2rem);

    .description,
    .title {
      color: var(--black300) !important;
      text-align: left;
    }

    svg {
      color: var(--green100);
      transform: scale(1.2, 1.2);
    }

    .title {
      grid-row: 1 / 3;
      grid-column: 1;
      font-size: 3.5rem;
    }

    .description {
      grid-row: 5 / 11;
      grid-column: 1;
      font-size: 2.6rem;
      font-weight: 400;
    }

    .line {
      border: 5px solid var(--green100);
      grid-column: 1;
      grid-row: 14;
      width: 100%;
      animation: 10s ${widthAnimation} ease-in-out infinite;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: var(--image-width);
  margin: auto;
  height: var(--image-height);

  /* @media screen and ${theme.breakpoints.bigTablet} {
    height: 40rem;
    width: 23rem;
  } */
`;

type PhoneImageContentProps = {
  fontSize: number;
  isDarkTheme: boolean;
};
const PhoneImageContent = styled.div<PhoneImageContentProps>`
  color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? "white" : "var(--black300)"};

  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? "var(--bootstrapDark)" : "white"};
  text-align: left;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 0.5rem;
  /* height: 26.4rem; */
  height: calc(var(--image-height) - 1.6rem);
  width: calc(var(--image-width) - 2rem);
  border-radius: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  cursor: pointer;
  left: 0;
  right: 0;
  top: 0.7rem;
  p,
  b {
    margin: 0 0 0.5rem;
    font-size: ${({ fontSize }) => fontSize + "rem"};
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    border-radius: 2rem;
    p,
    b {
      font-size: var(--s);
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

type AnimatedIconProps = {
  component: any;
  onClick: () => void;
  delay?: number;
  size?: number;
};

const iconAnimation = keyframes`
  0% {
    top: calc(var(--image-height) / 2 - 5rem);
  }
  100% {
    top: calc(var(--image-height) / 2 - 4rem );
  }
`;
const AnimatedIcon = styled(
  ({ component: Component, ...rest }: AnimatedIconProps) => (
    <Component {...rest} />
  )
)`
  position: absolute;

  &:first-of-type {
    transform: translateX(calc(-50% - (var(--image-width) / 2) - 4rem));
  }
  cursor: pointer;

  &:last-of-type {
    animation-delay: 0.6s;
    transform: translateX(calc(-50% + var(--image-width) / 2 + 4rem));
  }

  top: calc(var(--image-height) / 2 - 2rem);
  animation-name: ${iconAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-out;
`;

const fontSizeOptions = [1.1, 1.2, 1.3, 1.4, 1.5];
const Demo = () => {
  const { t } = useTranslation(Translations.MAIN);
  const [isDarkTheme, toggleIsDarkTheme] = useToggle(false);
  const [presentationFontSize, setPresentationFontSize] = useState<number>(
    fontSizeOptions[0]
  );

  const handleFontSizeChange = () => {
    let currentFontSizeIndex = fontSizeOptions.indexOf(presentationFontSize);
    let nextFontSize =
      currentFontSizeIndex < fontSizeOptions.length - 1
        ? fontSizeOptions[currentFontSizeIndex + 1]
        : fontSizeOptions[0];
    setPresentationFontSize(nextFontSize);
  };
  return (
    <Container className="gradient gradient-hide-big-tablet">
      <div className="blob-container">
        <Blob transition={3000} />
      </div>

      <Wave reverse />
      <ContentContainer className="container">
        <h2 className="title">{t("home_demo_presentation_title")}</h2>
        <ImageContainer>
          <ImageWrapper>
            <Img src={IphoneImage} />
            <PhoneImageContent
              fontSize={presentationFontSize}
              isDarkTheme={isDarkTheme}
            >
              <p className="demo-content-title">
                <b>{t("home_demo_presentation_pill_title")}</b>
              </p>
              <p className="demo-content">
                {t("home_demo_presentation_pill_content")}
              </p>
            </PhoneImageContent>
          </ImageWrapper>

          <AnimatedIcon
            component={isDarkTheme ? BsMoonStars : BsSun}
            size={42}
            onClick={toggleIsDarkTheme}
          />
          <AnimatedIcon
            component={BiFontSize}
            size={42}
            onClick={handleFontSizeChange}
          />
        </ImageContainer>
        <p className="description">{t("home_demo_presentation_description")}</p>
        <hr className="line" />
      </ContentContainer>
      <Spacer y={8} />
    </Container>
  );
};

export default Demo;
