import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { AiOutlineFileSearch, AiOutlineFieldTime } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
`;

const P = styled.p`
  margin: 5px 0;
`;

const Pros = () => {
  const { t } = useTranslation("translation");
  return (
    <FlexContainer>
      <Card>
        <h1>{t("home_pros_section_title")}</h1>
      </Card>
      <Card>
        <div>
          <AiOutlineFileSearch size={32} />
        </div>
        <h2 className="no-space">{t("home_first_pros_title")}</h2>
        <P>{t("home_first_pros_description")}</P>
      </Card>
      <Card>
        <div>
          <AiOutlineFieldTime size={32} />
        </div>
        <h2 className="no-space">{t("home_second_pros_title")}</h2>
        <P>{t("home_second_pros_description")}</P>
      </Card>
      <Card>
        <div>
          <GiBrain size={32} />
        </div>
        <h2 className="no-space">{t("home_third_pros_title")}</h2>
        <P>{t("home_third_pros_description")}</P>
      </Card>
    </FlexContainer>
  );
};

export default Pros;
