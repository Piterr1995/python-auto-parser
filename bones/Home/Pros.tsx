import styled, { keyframes } from "styled-components";
import { useTranslation } from "next-i18next";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { BiTimer, BiBrain } from "react-icons/bi";

import { Translations } from "enums";
import Spacer from "components/atoms/Spacer";
import { theme } from "style/theme";
import Blob from "components/atoms/Blob";

const prosIconAnimation = (laptopVersion: boolean) => keyframes`
    0% {
      color: var(--green100);
      transform: ${
        laptopVersion ? "translateX(0%) scale(1.1, 1.1)" : "translateX(0%)"
      };
      
    } 

     5% {
      color: var(--purple100);
      transform: ${
        laptopVersion ? "translateX(20%) scale(1.1, 1.1)" : "translateX(20%)"
      };
      

     }

     10% {
     color: var(--green100);

      transform: ${
        laptopVersion ? "translateX(0%) scale(1.1, 1.1)" : "translateX(0%)"
      };
     }
     }
 `;

const IconWrapper = styled.div<{ order: number }>`
  svg {
    color: var(--green100);
    animation-name: ${prosIconAnimation(false)};
    animation-duration: 24s;
    animation-delay: ${({ order }) => order * 6}s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    svg {
      animation-name: ${prosIconAnimation(true)};
    }
  }
`;

const H1 = styled.h1`
  font-size: var(--xl);
  @media screen and ${theme.breakpoints.bigTablet} {
    font-size: 2.6rem;
    margin-bottom: 4rem;
  }
`;

interface BlobContainerProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const BlobContainer = styled.div<BlobContainerProps>`
  display: none;

  @media screen and ${theme.breakpoints.bigTablet} {
    position: absolute;
    width: 50%;
    height: 50%;
    right: ${({ right }) => right ?? "auto"};
    left: ${({ left }) => left ?? "auto"};
    top: ${({ top }) => top ?? "auto"};
    bottom: ${({ bottom }) => bottom ?? "auto"};

    z-index: 1;
    display: flex;
    justify-content: center;
  }
`;
const ProsContainer = styled.div`
  margin-top: 5rem;
  padding: 3rem 0;
  background-color: var(--lightgray200);
  position: relative;

  .pros-items-container {
    display: grid;
    grid-gap: 2.5rem;

    .pros {
      display: grid;
      grid-gap: 0.5rem;
      justify-content: space-around;
      z-index: 3;
    }
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    margin-top: 10rem;
    padding: 5rem;

    .pros-items-container {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;

      .pros {
        line-height: 3rem;

        svg {
          color: var(--green100);
          transform: translateX(0%) scale(1.1, 1.1);
        }
        h2 {
          font-size: var(--m);
        }

        p {
          font-size: var(--s);
        }
      }
    }
  }
  @media screen and ${theme.breakpoints.desktop} {
    margin-top: 40rem;
    /* padding: 10rem; */
  }
`;

const Pros = () => {
  const { t } = useTranslation(Translations.MAIN);
  return (
    <ProsContainer>
      <BlobContainer top="5rem" right="-2rem">
        <Blob transition={2000} />
      </BlobContainer>
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

      <Spacer y={20} />
    </ProsContainer>
  );
};

export default Pros;
