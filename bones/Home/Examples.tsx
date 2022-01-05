import styled from "styled-components";
import { useTranslation } from "next-i18next";
import slugify from "slugify";

import { Translations } from "enums";
import { pills, authors } from "data";
import PillCard from "components/molecules/PillCard";
import { theme } from "style/theme";
import Blob from "components/atoms/Blob";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  .blob-container {
    display: none;
    @media screen and ${theme.breakpoints.bigTablet} {
      --blob-container-width: 50rem;
      --blob-position: calc(-1 * var(--blob-container-width) / 1.5);
      position: absolute;
      width: var(--blob-container-width);
      display: block;
      z-index: -1;
      /* &:nth-child(1) {
        top: 65%;
        left: var(--blob-position);
      } */
      &:nth-child(1) {
        top: 25%;
        right: var(--blob-position);
      }
    }
  }
`;
const ContentContainer = styled.div`
  @media screen and ${theme.breakpoints.bigTablet} {
    padding-top: 5rem !important;
  }
`;
const H1 = styled.h1`
  font-size: var(--xl);

  /* @media screen and ${theme.breakpoints.bigTablet} {
    font-size: 3.5rem;
  } */
`;

const PillCardsContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-gap: 1.5rem;
  overflow-x: scroll;
  padding: 1rem;
  width: 80%;
  margin: auto;

  @media screen and ${theme.breakpoints.bigTablet} {
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    grid-gap: 3rem;
  }
  img {
    width: 100%;
  }
`;

// const PillCardsContainerWrapper = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;
const Examples = () => {
  const { t } = useTranslation(Translations.MAIN);
  return (
    <Container>
      <div className="blob-container first">
        <Blob transition={3000} />
      </div>
      <ContentContainer className="container" id="examples">
        <H1>{t("home_examples_title")}</H1>
        <PillCardsContainer>
          {pills.map((pill) => {
            const pillAuthors = authors.filter((author) =>
              pill.authors.includes(author.id)
            );
            const authorsNames = pillAuthors.map((author) => author.name);
            const joinedAuthorsNames = authorsNames.join(", ");
            const titleSlug = slugify(pill.title);
            return (
              <PillCard
                key={pill.id}
                cover={pill.cover}
                title={pill.title}
                authors={joinedAuthorsNames}
                timeToRead={pill.timeToRead}
                destinationUrl={`/pill-details/${pill.id}?title=${titleSlug}`}
              />
            );
          })}
        </PillCardsContainer>
      </ContentContainer>
    </Container>
  );
};

export default Examples;
