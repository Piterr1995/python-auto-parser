import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Button from "components/atoms/Button";
import BookInfoSwitch from "bones/PillDetails/BookInfoSwitch";
import { Translations, Breakpoints } from "enums";
import { useAppContext } from "hooks/useAppContext";

const Card = styled.div`
  padding: 15px;
  border-radius: 15px;

  h2 {
    color: var(--grey100);
  }
`;
const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const CardData = styled.div`
  padding: 1rem 0;

  h1 {
    margin: 1rem 0 0.5rem;
  }
  h2 {
    margin: 0.5rem 0 1rem;
  }
  p {
    margin: 0.5rem 0;

    &.informations {
      margin-top: 1.5rem;
      font-weight: 500;
    }
  }
  .timeWrapper {
    display: flex;
    align-items: center;

    svg {
      color: inherit;
    }
    span {
      margin-left: 0.5rem;
      font-size: 1.4rem;
    }
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 15px;
`;

const PillDetails = () => {
  const { state } = useAppContext();
  const { t } = useTranslation(Translations.MAIN);
  return (
    <>
      {state.windowWidth < Breakpoints.BIG_TABLET ? (
        <Card>
          <ImageWrapper>
            <img alt={"123"} />
          </ImageWrapper>
          <CardData>
            <h1>Prawo</h1>
            <h2>Will Smith, Nicolas Cage</h2>
            <div className="timeWrapper">
              <AiOutlineClockCircle size={20} /> <span>13 minut</span>
            </div>
            <ButtonsWrapper>
              <Button>Czytaj</Button> <Button secondary>Kup tę książkę</Button>
            </ButtonsWrapper>
            <p className="informations">Dodatkowe informacje</p>
            <p>{t("pill_details_full_title")}: Prawo. Jak być dobrym</p>
            <p>{t("pill_details_categories")}: filozofia, finanse</p>
          </CardData>
          <BookInfoSwitch
            bookDescription={"<p>Hello</p>"}
            authors={[
              { name: "John Stones", description: "A nice guy" },
              { name: "John Stones", description: "A nice guy" },
            ]}
          />{" "}
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};
export default PillDetails;

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [Translations.MAIN])),
    },
  };
}
