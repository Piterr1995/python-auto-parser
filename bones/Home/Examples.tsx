import styled from "styled-components";
import { useTranslation } from "next-i18next";

import { Translations } from "enums";
import { books } from "data";
import BookCard from "components/molecules/BookCard";

const BookCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  overflow-x: scroll;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const BookCardsContainerWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Examples = () => {
  const { t } = useTranslation(Translations.MAIN);
  return (
    <div className="container">
      <h1 className="xl">{t("home_examples_title")}</h1>
      <BookCardsContainerWrapper>
        <BookCardsContainer>
          {books.map((book) => (
            <BookCard
              key={book.id}
              cover={book.cover}
              title={book.title}
              authors={book.authors.join(", ")}
              timeToRead={book.timeToRead}
              destinationUrl="/"
            />
          ))}
        </BookCardsContainer>
      </BookCardsContainerWrapper>
    </div>
  );
};

export default Examples;
