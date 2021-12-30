import { useState } from "react";

import styled, { keyframes } from "styled-components";
import parse from "html-react-parser";
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
  padding-top: 3rem;
  position: relative;
  text-align: center;
  width: 100%;
  overflow: hidden;
  svg {
    color: white;
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    --image-width: 20rem;
    --image-height: 40rem;
    padding: 5rem;
  }
`;

const TextAndBlobContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title {
    color: white;
  }
  .description-large-screen {
    display: none;
  }

  .blob-container {
    display: none;
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    text-align: left;
    border-right: 3px dotted lightgray;

    .title {
      color: var(--black300);
      margin: 0;
      font-size: var(--xl);
      margin-top: 0.5rem;
    }

    .description-large-screen {
      display: block;
      margin: 0;
      font-size: 1.4rem;
      line-height: 2.5rem;
    }

    .blob-container {
      display: block;
      width: 14rem;
      margin: auto;
    }
  }

  @media screen and ${theme.breakpoints.desktop} {
    .description-large-screen {
      font-size: 1.5rem;
    }
  }
`;

const ContentContainer = styled.div`
  .description-small-screen {
    color: white;
    font-weight: 600;
  }
  @media screen and ${theme.breakpoints.bigTablet} {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    svg {
      color: var(--green100);
      transform: scale(1.2, 1.2);
    }

    .description-small-screen {
      display: none;
    }
  }
`;

// IMAGE SECTION

const ImageContainer = styled.div`
  position: relative;
`;
const ImageWrapper = styled.div`
  position: relative;
  margin: auto;
  width: var(--image-width);
  height: var(--image-height);

  @media screen and ${theme.breakpoints.bigTablet} {
    height: 40rem;
    width: 20rem;
  }
`;

type PhoneImageContentProps = {
  fontSize: number;
  isDarkTheme: boolean;
};

const PhoneImageContent = styled.div<PhoneImageContentProps>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? "white" : "var(--black300)")};

  background: ${({ isDarkTheme }) =>
    isDarkTheme ? "var(--bootstrapDark)" : "white"};
  text-align: left;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 0.5rem;
  height: calc(var(--image-height) - 1.6rem);
  width: calc(var(--image-width) - 2rem);
  border-radius: 1rem;
  overflow: scroll;
  cursor: pointer;
  left: 0;
  right: 0;
  top: 0.7rem;

  ul {
    padding: 0 0 0 1.5rem;
  }
  p,
  b {
    margin: 0 0 0.5rem;
    font-size: ${({ fontSize }) => fontSize + "rem"};
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and ${theme.breakpoints.bigTablet} {
    border-radius: 2.2rem;
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

const fontSizeOptions = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7];
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
      <ContentContainer className="container">
        <TextAndBlobContainer>
          <h2 className="title">{t("home_demo_presentation_title")}</h2>
          <p className="description-large-screen">
            {t("home_demo_presentation_description")}
          </p>
          <div className="blob-container">
            <Blob transition={3000} />
          </div>
        </TextAndBlobContainer>
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
                {parse(t("home_demo_presentation_pill_content"))}
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
        <Spacer y={4} />

        <div className="description-small-screen">
          {t("home_demo_presentation_description")}
        </div>
      </ContentContainer>
      <Spacer y={8} />
    </Container>
  );
};

export default Demo;
