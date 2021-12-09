import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Translations } from "enums";
import { useAppContext } from "hooks/useAppContext";
import { AuthModalAction } from "actions";
import Button from "components/atoms/Button";

type HeroProps = {
  handleShowLoginRegisterModal: () => void;
};
const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  width: 80%;
  margin: 5px auto 0;
  color: #404040;
  font-size: 1.5rem;
`;

const B = styled.b`
  font-weight: 500;
  font-size: 1.4rem;

  color: #202020;
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const Hero = () => {
  const { t } = useTranslation([Translations.TRANSLATION, Translations.COMMON]);
  const { dispatch } = useAppContext();

  const handleShowLoginRegisterModal = () => {
    dispatch(AuthModalAction.showLoginRegisterModal());
  };
  return (
    <div className="text-center">
      <Title>{t("home_hero_section_title")}</Title>
      <Subtitle>
        {t("home_hero_section_subtitle_light")}{" "}
        <B>{t("home_hero_section_subtitle_bold")}</B>
      </Subtitle>
      <ButtonWrapper>
        <Button onClick={handleShowLoginRegisterModal}>
          {t(`${Translations.COMMON}:call_to_action`)}
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Hero;
