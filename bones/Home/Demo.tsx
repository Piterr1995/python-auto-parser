import { useState } from "react";

import styled, { css, keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { BiFontSize } from "react-icons/bi";
import { BsMoonStars, BsSun } from "react-icons/bs";

import { useToggle } from "hooks/useToggle";
import { Translations } from "enums";
import Wave from "components/atoms/Wave";
import Spacer from "components/atoms/Spacer";

const IphoneImage = "/images/iPhone.jpg";

const Container = styled.div`
  padding: 2rem auto 0;
  text-align: center;
  width: 100%;

  .description,
  .title,
  svg {
    color: white;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 15rem;
  margin: auto;
  height: 28rem;
`;

type PhoneImageContentProps = {
  fontSize: number;
  isDarkTheme: boolean;
};
const PhoneImageContent = styled.div<PhoneImageContentProps>`
  /* z-index: -1; */

  color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? "white" : "var(--black300)"};

  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? "var(--bootstrapDark)" : "white"};
  text-align: left;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 0.5rem;
  height: 26.4rem;
  width: 13rem;
  border-radius: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  cursor: pointer;
  left: 0px;
  right: 0;
  top: 0.7rem;
  p,
  b {
    margin: 0 0 0.5rem;
    font-size: ${({ fontSize }) => fontSize + "rem"};
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
  top?: number;
  left?: number;
};

const iconAnimation = (top: number) => keyframes`
  0% {
    top: ${top - 5}px;
  }
  100% {
    top: ${top + 5}px;
  }
`;
const AnimatedIcon = styled(
  ({ component: Component, ...rest }: AnimatedIconProps) => (
    <Component {...rest} />
  )
)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  &:last-child {
    animation-delay: 0.6s;
  }
  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
      animation-name: ${iconAnimation(top)};
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-out;
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left}px;
    `}
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
    <Container className="gradient">
      <Wave reverse />
      <h2 className="title">{t("home_demo_presentation_title")}</h2>
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
        <AnimatedIcon
          component={BiFontSize}
          size={42}
          top={100}
          left={170}
          onClick={handleFontSizeChange}
        />
        <AnimatedIcon
          component={isDarkTheme ? BsMoonStars : BsSun}
          size={42}
          top={100}
          left={-60}
          onClick={toggleIsDarkTheme}
        />
      </ImageWrapper>
      <p className="description">
        <b>{t("home_demo_presentation_description")}</b>
      </p>
      <Spacer y={8} />
    </Container>
  );
};

export default Demo;
