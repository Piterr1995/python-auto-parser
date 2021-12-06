import styled from "styled-components";
import { useTranslation } from "next-i18next";

import { Translations } from "enums";
import { pills, authors } from "data";
import PillCard from "components/molecules/PillCard";

const Container = styled.div`
  /* background-color: var(--grey100); */
`;
const PillCardsContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-gap: 1.5rem;
  overflow-x: scroll;
  padding: 1rem;
  width: 80%;
  margin: auto;

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
    <Container className="container" id="examples">
      <h1 className="xl">{t("home_examples_title")}</h1>
      <PillCardsContainer>
        {pills.map((pill) => {
          const pillAuthors = authors.filter((author) =>
            pill.authors.includes(author.id)
          );
          const authorsNames = pillAuthors.map((author) => author.name);
          const joinedAuthorsNames = authorsNames.join(", ");
          return (
            <PillCard
              key={pill.id}
              cover={pill.cover}
              title={pill.title}
              authors={joinedAuthorsNames}
              timeToRead={pill.timeToRead}
              destinationUrl={`/pill-details/${pill.id}`}
            />
          );
        })}
        ;
      </PillCardsContainer>
    </Container>
  );
};

export default Examples;
