import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import slugify from "slugify";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Button from "components/atoms/Button";
import PillInfoSwitch from "bones/pill-details/PillInfoSwitch";
import { Translations } from "enums";
import { useAppContext } from "hooks/useAppContext";
import { pills, authors } from "data";
import { theme } from "style/theme";
const BubbleBackground = "/images/bubble-background.png";

const CardBackground = "/images/dynamic-style.png";

import Spacer from "components/atoms/Spacer";

const Container = styled.div`
  @media screen and ${theme.breakpoints.bigTablet} {
    padding-top: 5rem;
    min-height: 100vh;
    background: url(${BubbleBackground});
  }
`;
const CardWrapper = styled.div`
  .pill-info-switch {
    width: 100%;
  }
  @media screen and ${theme.breakpoints.bigTablet} {
    max-width: 1000px;
    margin: auto;
    /* background: white; */
    background: url(${CardBackground});
    border-radius: 2rem;
    padding: 1.5rem;

    .pill-info-switch {
      margin-top: 3rem;
    }
  }
`;
const StyledButton = styled(Button)`
  text-decoration: none;
  cursor: pointer;

  @media screen and ${theme.breakpoints.bigTablet} {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`;
const Card = styled.div`
  @media screen and ${theme.breakpoints.bigTablet} {
    display: grid;
    height: 300px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`;
const ImageWrapper = styled.div`
  img {
    width: 100%;
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    grid-column: 1;
    grid-row: 1 / -1;

    img {
      height: 100%;
      width: auto;
    }
  }
`;

const CardData = styled.div`
  --small-padding: 1.5rem;

  padding: var(--small-padding);

  .titleContainer {
    .backgroundTitle {
      display: none;
    }

    @media screen and ${theme.breakpoints.bigTablet} {
      margin-left: calc(-1 * var(--small-padding));
      border-radius: 1rem;
      background-color: #707070;
      padding: 1rem var(--small-padding);
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      grid-row: 1 / 4;

      .backgroundTitle {
        width: 200%;
        font-size: 6.2rem;
        font-weight: 700;
        color: white;
        opacity: 0.05;
        position: absolute;
        display: flex;
        align-items: center;
      }
      .title {
        font-size: 2rem;
        width: 100%;
        color: white;
      }
    }
  }

  .authors {
    color: var(--grey100);

    @media screen and ${theme.breakpoints.bigTablet} {
      grid-row: 4 / 6;
      margin-top: 1.2rem;
      font-size: var(--m);
    }
  }

  h1 {
    margin: 1rem 0 0.5rem;
  }
  h2 {
    margin: 0.5rem 0 1rem;
  }

  .additionalInfo {
    .informations {
      margin: 1.5rem 0 0.5rem;
      font-weight: 500;
      font-size: 1.4rem;

      @media screen and ${theme.breakpoints.bigTablet} {
        display: none;
      }
    }
    .fullTitle,
    .categories {
      margin: 0.5rem 0;
      font-size: 1.3rem;
    }

    @media screen and ${theme.breakpoints.bigTablet} {
      grid-row: 6 / 8;
      .fullTitle,
      .categories {
        margin: 0.7rem 0;
        font-size: 1.4rem;
      }
    }
  }

  .timeSectionContainer {
    display: flex;
    align-items: center;

    svg {
      color: inherit;
    }
    span {
      margin-left: 0.5rem;
      font-size: 1.4rem;
    }

    @media screen and ${theme.breakpoints.bigTablet} {
      grid-row: 8 / 9;
      margin-top: 2.5rem;

      span {
        font-size: 1.3rem;
      }

      svg {
        transform: scale(0.9, 0.9);
      }
    }
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    grid-column: 2 / -1;
    padding-left: var(--small-padding);
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    height: 300px;

    h2 {
      margin: 0;
    }
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 1.5rem;

  @media screen and ${theme.breakpoints.bigTablet} {
    grid-row: 10 / 12;
  }
`;

const PillDetails = ({ pill, pillAuthors }: any) => {
  const { state } = useAppContext();
  const { t } = useTranslation(Translations.MAIN);
  const { cover, title, timeToRead, purchaseLink } = pill;
  const authorNames = pillAuthors.map((author: any) => author.name);
  const authorsString = authorNames.join(", ");
  const router = useRouter();

  const handleGoToPillContent = (pillId: number, pillTitle: string) => {
    const titleSlug = slugify(pillTitle);
    const authorsSlug = slugify(authorsString);
    router.push(
      `/pill-details/${pillId}/content?title=${titleSlug}&authors=${authorsSlug}`
    );
  };
  return (
    <Container>
      <CardWrapper className="shadow">
        <Card>
          <ImageWrapper>
            <img alt={"123"} src={cover} />
          </ImageWrapper>
          <CardData>
            <div className="titleContainer">
              <div className="backgroundTitle">{title}</div>
              <h1 className="title">{title}</h1>
            </div>
            <h2 className="authors">{authorsString}</h2>
            <div className="timeSectionContainer">
              {/* <span>Czas czytania: {timeToRead} min.</span> */}
              <AiOutlineClockCircle size={20} /> <span>{timeToRead} min.</span>
            </div>
            <ButtonsContainer>
              <StyledButton
                onClick={() => handleGoToPillContent(pill.id, pill.title)}
              >
                Czytaj
              </StyledButton>{" "}
              <StyledButton
                secondary
                as="a"
                href={purchaseLink}
                target="_blank"
              >
                Kup tę książkę
              </StyledButton>
            </ButtonsContainer>
            <div className="additionalInfo">
              <p className="informations">Dodatkowe informacje</p>
              <p className="fullTitle">
                {t("pill_details_full_title")}: {title}
              </p>
              <p className="categories">
                {t("pill_details_categories")}: {pill.categories.join(", ")}
              </p>
            </div>
          </CardData>
        </Card>
        <PillInfoSwitch
          pillDescription={pill.description}
          authors={pillAuthors}
          className="pill-info-switch container"
        />{" "}
        <Spacer y={20} />
      </CardWrapper>
    </Container>
  );
};
export default PillDetails;

export async function getStaticPaths() {
  const paths = pills.map((pill) => ({
    params: {
      pillId: `${pill.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  locale,
  params,
}: {
  locale: any;
  params: any;
}) {
  const pillId = params.pillId;
  const pill = pills.find((item) => item.id === +pillId);
  let pillAuthors: any[] = [];
  pill?.authors?.forEach((authorId) => {
    const author = authors.find((author) => author.id === authorId);
    pillAuthors.push(author);
  });

  return {
    props: {
      pill,
      pillAuthors,
      ...(await serverSideTranslations(locale, [Translations.MAIN])),
    },
  };
}
