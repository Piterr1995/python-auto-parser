import styled from "styled-components";
import { useTranslation } from "next-i18next";

import { Translations } from "enums";
import { pills } from "data";
import PillCard from "components/molecules/PillCard";

const PillCardsContainer = styled.div`
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

const PillCardsContainerWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Examples = () => {
  const { t } = useTranslation(Translations.MAIN);
  return (
    <div className="container" id="examples">
      <h1 className="xl">{t("home_examples_title")}</h1>
      <PillCardsContainerWrapper>
        <PillCardsContainer>
          {pills.map((pill) => (
            <PillCard
              key={pill.id}
              cover={pill.cover}
              title={pill.title}
              authors={pill.authors.join(", ")}
              timeToRead={pill.timeToRead}
              destinationUrl="/"
            />
          ))}
        </PillCardsContainer>
      </PillCardsContainerWrapper>
    </div>
  );
};

export default Examples;
