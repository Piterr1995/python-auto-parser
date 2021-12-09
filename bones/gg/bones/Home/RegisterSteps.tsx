import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { AiOutlineFileSearch, AiOutlineFieldTime } from "react-icons/ai";
import { BsPersonCheck, BsSearch } from "react-icons/bs";

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  padding: 15px 15px 25px;

  h1 {
    color: white;
  }
`;

const CardsWrapper = styled.div`
  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Cards = styled.div`
  display: flex;
  width: 750px;
`;
const Card = styled.div`
  border-radius: 15px;
  margin-right: 10px;
  padding: 15px;
  width: 250px;
  background: #fafafa;

  /* svg {
    color: $;
  } */
`;

const P = styled.p`
  margin: 5px 0;
`;

const RegisterSteps = () => {
  const { t } = useTranslation("translation");

  return (
    <Container className="gradient">
      <h1>{t("home_it_works_title")}</h1>
      <CardsWrapper>
        <Cards>
          <Card>
            <div>
              <BsPersonCheck size={32} />
            </div>
            <h2 className="no-space">{t("home_it_works_first_step_title")}</h2>
            <P>{t("home_it_works_first_step_description")}</P>
          </Card>
          <Card>
            <div>
              <BsSearch size={32} />
            </div>
            <h2 className="no-space">{t("home_it_works_second_step_title")}</h2>
            <P>{t("home_it_works_second_step_description")}</P>
          </Card>
          <Card>
            <div>
              <AiOutlineFieldTime size={32} />
            </div>
            <h2 className="no-space">{t("home_it_works_third_step_title")}</h2>
            <P>{t("home_it_works_third_step_description")}</P>
          </Card>
        </Cards>
      </CardsWrapper>
    </Container>
  );
};

export default RegisterSteps;
