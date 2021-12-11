import styled from "styled-components";
import { useTranslation } from "next-i18next";
import slugify from "slugify";

import { Translations } from "enums";
import { pills, authors } from "data";
import PillCard from "components/molecules/PillCard";
import { theme } from "style/theme";

const H1 = styled.h1`
  font-size: var(--xl);
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
  }
  img {
    width: 100%;
  }

  /* &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; */
`;

// const PillCardsContainerWrapper = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;
const Examples = () => {
  const { t } = useTranslation(Translations.MAIN);
  return (
    <div className="container" id="examples">
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
    </div>
  );
};

export default Examples;
