import styled, { keyframes } from "styled-components";
import { useTranslation } from "next-i18next";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { BiTimer, BiBrain } from "react-icons/bi";

import { Translations } from "enums";
import Wave from "components/atoms/Wave";
import Spacer from "components/atoms/Spacer";
import { theme } from "style/theme";
import Blob from "components/atoms/Blob";

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

const H1 = styled.h1`
  font-size: var(--xl);
  @media screen and ${theme.breakpoints.bigTablet} {
    font-size: 3.5rem;
  }
`;

const ProsContainer = styled.div`
  background-color: var(--lightgray200);
  position: relative;

  @media screen and ${theme.breakpoints.bigTablet} {
    padding-bottom: 7rem;
  }

  .wave-wrapper {
    position: relative;
    overflow: hidden;
    .wave {
      width: 150%;
    }
  }
  .pros-items-container {
    display: grid;
    grid-gap: 2.5rem;

    .pros {
      display: grid;
      grid-gap: 0.5rem;
      justify-content: space-around;
      z-index: 3;
    }

    @media screen and ${theme.breakpoints.bigTablet} {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 7rem;

      .pros {
        grid-template-rows: 4rem 3rem 11rem;
        h2 {
          font-size: 2rem;
        }

        p {
          font-size: var(--m);
        }
      }
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

  return (
    <ProsContainer>
      <div className="wave-wrapper">
        <Wave className="wave" reverse />
      </div>
      <div className="container">
        <Spacer y={2} />
        <H1>{t("home_pros_header")}</H1>
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
        <Blob transition={2000} />
      </div>
      <Spacer y={20} />
    </ProsContainer>
  );
};

export default Pros;
