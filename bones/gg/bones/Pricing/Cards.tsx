import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Translations } from "enums";
import Spacer from "components/atoms/Spacer";
import Button from "components/atoms/Button";
import Wave from "components/atoms/Wave";

const StyledSpacer = styled(Spacer)`
  width: 100%;
`;

const WaveAndSpacerWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;

  .wave-wrapper {
    height: 7rem;
    position: relative;

    .wave {
      width: 150%;
    }
  }
`;

const CardWrapper = styled.div`
  border-radius: 1.5rem;
  padding: 1rem 2rem 2.5rem;
  width: 80%;
`;

const BenefitsList = styled.ul`
  padding: 0;
  margin: 0;
  width: 80%;
  margin-left: 1.3rem;
  text-align: left;

  li {
    margin: 0.7rem 0 0;
  }
`;

const PremiumCardWrapper = styled(CardWrapper)`
  padding: 0;
  position: relative;
  margin-top: 2rem;
  overflow: hidden;
`;

const PremiumCardDataWrapper = styled.div`
  position: relative;
  padding: 1rem 2rem 2.5rem;
  z-index: 2;

  .benefits {
    color: white;
    text-align: left;
    font-weight: 600;
  }
`;

const SmallCard = styled.div`
  position: relative;
  border-radius: 1rem;
  margin: 1.5rem;
  padding: 1.5rem;
  border: 0.1rem solid lightgray;
  background-color: white;
  h2 {
    margin: 0.3rem;
  }
  p {
    font-size: 1.35rem;
    margin: 0.3rem;
    /*  */
    &.savings {
      font-size: 1.3rem;
      color: green;
    }
  }

  .popular-choice {
    position: absolute;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    width: 15rem;
    height: 2rem;
    margin: auto;
    left: 0;
    right: 0;
    top: -1rem;
    background: #f0c545;
  }
`;

export const FreeTrialCard = () => {
  const { t } = useTranslation(Translations.TRANSLATION);
  const benefits = t("pricing_free_trial_benefits").split(",");
  return (
    <CardWrapper className="shadow">
      <h1>{t("pricing_free_trial_title")}</h1>
      <div className="text-center">
        {/* <Icon /> */}
        <h2>{t("pricing_free_trial_period")}</h2>
        <BenefitsList>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </BenefitsList>
      </div>
    </CardWrapper>
  );
};

export const PremiumCard = () => {
  const { t } = useTranslation(Translations.TRANSLATION);
  const benefits = t("pricing_premium_benefits").split(",");
  return (
    <PremiumCardWrapper className="shadow">
      <WaveAndSpacerWrapper>
        <StyledSpacer y={90} bg="white" />
        <div className="wave-wrapper">
          <Wave className="wave" reverse />
        </div>
        {/* <StyledWaveImage src={WaveImage} /> */}
      </WaveAndSpacerWrapper>
      <div className="gradient">
        <PremiumCardDataWrapper>
          <h1>{t("pricing_premium_title")}</h1>
          <div className="text-center">
            <SmallCard>
              <h2>{t("pricing_monthly_premium_period")}</h2>
              <p>{t("pricing_monthly_price")}</p>
              <Spacer y={1} />
              <Button>{t("pricing_pick_variant")}</Button>
            </SmallCard>
            <SmallCard>
              <div className="popular-choice">Popularny</div>
              <h2>{t("pricing_3_months_period")}</h2>
              <p>{t("pricing_3_months_price")}</p>
              <p className="savings">
                {t("pricing_discount_text")}: {t("pricing_3_months_discount")}
              </p>
              <Spacer y={1} />
              <Button>{t("pricing_pick_variant")}</Button>
            </SmallCard>
            <SmallCard>
              <h2>{t("pricing_yearly_premium_period")}</h2>
              <p>{t("pricing_yearly_price")}</p>
              <p className="savings">
                {t("pricing_discount_text")}: {t("pricing_yearly_discount")}
              </p>
              <Spacer y={1} />
              <Button>{t("pricing_pick_variant")}</Button>
            </SmallCard>
            <Spacer y={3} />
            <BenefitsList className="benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </BenefitsList>
          </div>
        </PremiumCardDataWrapper>
      </div>
    </PremiumCardWrapper>
  );
};
