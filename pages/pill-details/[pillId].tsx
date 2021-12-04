import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Button from "components/atoms/Button";
import PillInfoSwitch from "bones/PillDetails/PillInfoSwitch";
import { Translations, Breakpoints } from "enums";
import { useAppContext } from "hooks/useAppContext";
import { pills, authors } from "data";
import Spacer from "components/atoms/Spacer";

const StyledButton = styled(Button)`
  text-decoration: none;
`;
const Card = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
`;
const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const CardData = styled.div`
  .authors {
    color: var(--grey100);
  }

  padding: 1rem 0;

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
    }
    .fullTitle,
    .categories {
      margin: 0.5rem 0;
      font-size: 1.5rem;
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
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 15px;
`;

const PillDetails = ({ pill, authorsInfo }: any) => {
  const { state } = useAppContext();
  const { t } = useTranslation(Translations.MAIN);
  const { cover, title, authors: pillAuthors, timeToRead, purchaseLink } = pill;
  const authorNames = pillAuthors.map((author) => author.name);
  const authors = authorNames.join(", ");

  return (
    <>
      {state.windowWidth < Breakpoints.BIG_TABLET ? (
        <Card>
          <ImageWrapper>
            <img alt={"123"} src={cover} />
          </ImageWrapper>
          <CardData>
            <h1>{title}</h1>
            <h2 className="authors">{authors}</h2>
            <div className="timeSectionContainer">
              <AiOutlineClockCircle size={20} /> <span>{timeToRead} min.</span>
            </div>
            <ButtonsContainer>
              <Button>Czytaj</Button>{" "}
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
                {t("pill_details_categories")}: filozofia, finanse
              </p>
            </div>
          </CardData>
          <PillInfoSwitch
            bookDescription={"<p>Hello</p>"}
            authors={authorsInfo}
          />{" "}
        </Card>
      ) : (
        <></>
      )}
    </>
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
  const pillAuthorIds = pill?.authors.map((author) => author.id);
  let authorsInfo: any[] = [];
  pillAuthorIds?.forEach((id) => {
    const author = authors.find((author) => author.id === id);
    authorsInfo.push(author);
  });

  return {
    props: {
      pill,
      authorsInfo,
      ...(await serverSideTranslations(locale, [Translations.MAIN])),
    },
  };
}
