import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "next-i18next";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { BiTimer, BiBrain } from "react-icons/bi";
import { animated, useSpring } from "react-spring";
import { Translations } from "enums";
import Wave from "components/atoms/Wave";
import Spacer from "components/atoms/Spacer";
import { theme } from "style/theme";

const blobs = [
  "M47.2,-45.2C61.8,-32.6,74.6,-16.3,76.2,1.6C77.8,19.5,68.2,39.1,53.7,55.3C39.1,71.4,19.5,84.3,1.7,82.6C-16.2,80.9,-32.3,64.7,-43,48.5C-53.6,32.3,-58.8,16.2,-59.3,-0.5C-59.8,-17.1,-55.5,-34.2,-44.9,-46.7C-34.2,-59.3,-17.1,-67.2,-0.4,-66.8C16.3,-66.4,32.6,-57.7,47.2,-45.2Z",
  "M54.2,-57.7C66.9,-41.6,71.4,-20.8,68.4,-2.9C65.5,14.9,55.2,29.9,42.5,45.8C29.9,61.8,14.9,78.7,-3.6,82.3C-22.1,85.9,-44.3,76.2,-55.5,60.2C-66.8,44.3,-67.2,22.1,-65.7,1.5C-64.2,-19.2,-61,-38.4,-49.7,-54.6C-38.4,-70.7,-19.2,-83.8,0.8,-84.6C20.8,-85.3,41.6,-73.8,54.2,-57.7Z",
  "M55.6,-53.3C69.9,-41.2,78.2,-20.6,78.9,0.7C79.7,22.1,72.9,44.1,58.5,57.2C44.1,70.2,22.1,74.2,-0.3,74.5C-22.6,74.8,-45.1,71.2,-57.3,58.2C-69.5,45.1,-71.3,22.6,-69.5,1.9C-67.6,-18.9,-62.1,-37.7,-49.9,-49.9C-37.7,-62.1,-18.9,-67.6,0.9,-68.5C20.6,-69.3,41.2,-65.5,55.6,-53.3Z",
  "M52.3,-54.6C63.8,-40.9,66.3,-20.4,67.8,1.5C69.2,23.4,69.7,46.7,58.2,61.4C46.7,76,23.4,82,1.9,80.1C-19.5,78.2,-39,68.4,-54.5,53.7C-70,39,-81.4,19.5,-80.3,1.1C-79.2,-17.3,-65.5,-34.5,-50,-48.2C-34.5,-61.9,-17.3,-72,1.6,-73.6C20.4,-75.2,40.9,-68.3,52.3,-54.6Z",
  "M51.8,-51.9C64.3,-39.2,69.9,-19.6,70.5,0.6C71.1,20.8,66.7,41.6,54.2,56.3C41.6,71.1,20.8,79.8,2.1,77.7C-16.6,75.6,-33.2,62.7,-49.8,47.9C-66.4,33.2,-83.1,16.6,-82.4,0.7C-81.6,-15.1,-63.5,-30.2,-46.9,-43C-30.2,-55.7,-15.1,-66.1,2.2,-68.3C19.6,-70.6,39.2,-64.7,51.8,-51.9Z",
];

const prosIconAnimation = keyframes`
    0% {
      color: var(--purple100)
      transform: translateX(0%)
    } 
     5% {
      color: var(--purple100)
      transform: translateX(10%)
     }  

     10% {
       color: var(--blue100);
      transform: translateX(20%)

     }

     15% {
       color: var(--cyan100);
      transform: translateX(10%)

     }

     20% {
      color: var(--green100);
      transform: translateX(00%)

     }

     85% {
       color: var(--cyan100);
     }

     90% {
      color: var(--blue100);

     
     }
     100% {
      color: var(--green100);

     }
 `;

const IconWrapper = styled.div<{ order: number }>`
  svg {
    animation-name: ${prosIconAnimation};
    animation-duration: 10s;
    animation-delay: ${({ order }) => order * 3}s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const ProsContainer = styled.div`
  background-color: var(--lightgray100);
  position: relative;

  .wave-wrapper {
    position: relative;
    overflow: hidden;
    .wave {
      width: 150%;
      /* height: 30px; */
    }
  }
  .pros-items-container {
    display: grid;
    grid-gap: 2.5rem;

    @media screen and ${theme.breakpoints.bigTablet} {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 7rem;
    }
    .pros {
      display: grid;
      grid-gap: 0.5rem;
      justify-content: space-around;
      z-index: 3;

      /* p {
        font-size: var(--xs);
      } */
    }
  }

  .blob-container {
    position: absolute;
    width: 50%;
    height: 50%;
    right: 0rem;
    top: 5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
`;

const Pros = () => {
  const { t } = useTranslation(Translations.MAIN);
  const [blobAnimationActiveIndex, setBlobAnimationActiveIndex] = useState(0);
  const animationProps = useSpring({
    blob: blobs[blobAnimationActiveIndex],
    config: {
      duration: 2000,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setBlobAnimationActiveIndex((prev) => {
        const nextAnimationIndex = ~~(Math.random() * (blobs.length - 1));
        if (nextAnimationIndex === blobAnimationActiveIndex) {
          return prev + 1;
        } else {
          return nextAnimationIndex;
        }
      });
    }, 2000);
  }, [blobAnimationActiveIndex]);
  return (
    <ProsContainer>
      <div className="wave-wrapper">
        <Wave className="wave" reverse />
      </div>
      <div className="container">
        <Spacer y={2} />
        <StyledH1>{t("home_pros_header")}</StyledH1>
        <div className="pros-items-container">
          <div className="pros">
            <IconWrapper order={1}>
              <HiOutlineDocumentSearch size={34} className="first-pros" />
            </IconWrapper>
            <h2 className="no-space">{t("home_first_pros_title")}</h2>
            <p className="no-space">{t("home_first_pros_description")}</p>
          </div>
          <div className="pros">
            <IconWrapper order={2}>
              <BiTimer size={34} className="first-pros" />
            </IconWrapper>
            <h2 className="no-space">{t("home_second_pros_title")}</h2>
            <p className="no-space">{t("home_second_pros_description")}</p>
          </div>
          <div className="pros">
            <IconWrapper order={3}>
              <BiBrain size={30} className="first-pros" />
            </IconWrapper>
            <h2 className="no-space">{t("home_third_pros_title")}</h2>
            <p className="no-space">{t("home_third_pros_description")}</p>
          </div>
          <div className="pros">
            <IconWrapper order={4}>
              <BiBrain size={30} className="first-pros" />
            </IconWrapper>
            <h2 className="no-space">{t("home_fourth_pros_title")}</h2>
            <p className="no-space">{t("home_fourth_pros_description")}</p>
          </div>
        </div>
      </div>
      <div className="blob-container">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <animated.path
            fill="#00C7A9"
            d={animationProps.blob}
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <Spacer y={10} />
    </ProsContainer>
  );
};

export default Pros;
