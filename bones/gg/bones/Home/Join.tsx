import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { useAppContext } from "hooks/useAppContext";
import { AuthModalAction } from "actions";
import Button from "components/atoms/Button";

type JoinProps = {
  handleShowLoginRegisterModal: () => void;
};
const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const Join = () => {
  const { t } = useTranslation("translation");
  const { dispatch } = useAppContext();
  const handleshowLoginRegisterModal = () => {
    dispatch(AuthModalAction.showLoginRegisterModal());
  };
  return (
    <div className="text-center">
      <Title>{t("home_join_us_title")}</Title>
      <ButtonWrapper>
        <Button onClick={handleshowLoginRegisterModal}>
          {t("common:call_to_action")}
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Join;
