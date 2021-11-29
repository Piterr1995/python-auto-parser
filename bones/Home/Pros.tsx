import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "next-i18next";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { animated, useSpring } from "react-spring";
import { Translations } from "enums";
import Wave from "components/atoms/Wave";
import Spacer from "components/atoms/Spacer";

const blobs = [
  "M63.5 -54C81.7 -27.9 95.5 -1.5 95 30.1C94.5 61.7 79.8 98.4 53.3 111.4C26.9 124.3 -11.3 113.5 -34.3 93.8C-57.4 74 -65.2 45.4 -71.1 17C-76.9 -11.3 -80.7 -39.3 -68.5 -64.1C-56.3 -88.9 -28.1 -110.4 -2.7 -108.3C22.7 -106.1 45.3 -80.2 63.5 -54",
  "M81.2 -60.1C105.1 -34.8 124.2 -1.1 118.3 27.9C112.5 56.9 81.6 81.2 47.1 97.8C12.6 114.4 -25.6 123.4 -58.4 111.4C-91.3 99.4 -118.8 66.4 -117.9 36.5C-117 6.7 -87.8 -20.1 -63.5 -45.4C-39.1 -70.8 -19.5 -94.9 4.6 -98.6C28.7 -102.2 57.3 -85.4 81.2 -60.1",
  "M97.9 -76.9C122.2 -47.5 134.2 -7.1 123.2 22.8C112.1 52.6 78 71.8 43.7 86.8C9.4 101.8 -25 112.6 -44.5 100.2C-64 87.9 -68.6 52.3 -72.2 20.9C-75.9 -10.5 -78.6 -37.7 -66.4 -64.3C-54.2 -90.9 -27.1 -116.9 4.8 -120.8C36.7 -124.6 73.5 -106.3 97.9 -76.9",
  "M70.2 -55C94.6 -25.5 120.4 4 117.1 29.9C113.7 55.9 81.1 78.4 47.1 93C13 107.5 -22.6 114.1 -49 101.5C-75.5 88.9 -92.8 57 -92.9 29.1C-93 1.2 -75.8 -22.8 -57.5 -51C-39.1 -79.2 -19.5 -111.6 1.7 -112.9C22.9 -114.3 45.9 -84.6 70.2 -55",
  "M57.2 -55.1C71.7 -27.5 79.2 -3.8 74.6 17.3C70 38.4 53.2 57.1 30.3 71.3C7.4 85.6 -21.7 95.5 -52.1 88.5C-82.6 81.4 -114.4 57.4 -115.7 32C-117 6.7 -87.8 -20.1 -63.5 -49.9C-39.1 -79.8 -19.5 -112.9 0.9 -113.6C21.4 -114.4 42.7 -82.8 57.2 -55.1",
];
const firstProsAnimation = keyframes`
      0% {
        color: var(--green100);
        filter: brightness(85%);
        transform: scale(1, 1);

      }
      50% {
        color: var(--green100);
        filter: brightness(75%);
        transform: scale(1, 1);
      }
      100% {
        color: var(--blue100);
        transform: scale(1.2, 1.2);
        filter: brightness(100%);

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
    .pros {
      display: grid;
      grid-gap: 0.5rem;
      justify-content: space-around;
    }
  }

  .blob-container {
    display: flex;
    justify-content: center;
  }
`;

const Pros = () => {
  const { t } = useTranslation(Translations.MAIN);
  const [blobAnimationActiveIndex, setBlobAnimationActiveIndex] = useState(0);
  const animationProps = useSpring({
    blob: blobs[blobAnimationActiveIndex],
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
    }, 500);
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
            {/* <div>
              <HiOutlineDocumentSearch size={34} className="first-pros" />
            </div> */}
            <h2 className="no-space">{t("home_first_pros_title")}</h2>
            <p className="no-space">{t("home_first_pros_description")}</p>
          </div>
          <div className="pros">
            {/* <div>
              <HiOutlineDocumentSearch size={34} className="first-pros" />
            </div> */}
            <h2 className="no-space">{t("home_second_pros_title")}</h2>
            <p className="no-space">{t("home_second_pros_description")}</p>
          </div>
          <div className="pros">
            {/* <div>
              <HiOutlineDocumentSearch size={34} className="first-pros" />
            </div> */}
            <h2 className="no-space">{t("home_third_pros_title")}</h2>
            <p className="no-space">{t("home_third_pros_description")}</p>
          </div>
        </div>
      </div>
      <div className="blob-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="90"
          version="1.1"
          viewBox="0 100 900 450"
        >
          <animated.path
            fill="#00C7A9"
            d={animationProps.blob}
            transform="translate(440.772 295.716)"
          />
        </svg>
      </div>

      <button onClick={() => setBlobAnimationActiveIndex((prev) => prev + 1)}>
        Up
      </button>
      <Spacer y={10} />
    </ProsContainer>
  );
};

export default Pros;
