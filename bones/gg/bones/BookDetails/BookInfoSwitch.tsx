import { useState } from "react";

import { TFunction } from "react-i18next";
import { useTranslation } from "react-i18next";
import { Translations } from "enums";
import styled from "styled-components";
import Switch from "components/molecules/Switch";
import parse from "html-react-parser";

const InfoSwitch = styled.div`
  span {
    font-weight: 500;
    margin-right: 10px;
    padding-bottom: 10px;
    cursor: pointer;

    &.active {
      font-weight: 600;
      border-bottom: 1px solid ${({ theme }) => theme.palette.green100};
    }
  }
`;

const Content = styled.div`
  * {
    font-size: 1.2rem;
  }
`;

const AuthorsInfo = ({ authors }: any) => (
  <>
    {authors.map((author: any) => (
      <>
        <p>{author.name.toUpperCase()}</p>{" "}
        <div>{parse(author.description)}</div>
        <br />
      </>
    ))}
  </>
);

enum TabTypes {
  pill_DESCRIPTION,
  ABOUT_AUTHORS,
}
type BookInfoSwitchProps = {
  bookDescription: string;
  authors: object[];
};
const BookInfoSwitch = ({ bookDescription, authors }: BookInfoSwitchProps) => {
  const { t } = useTranslation(Translations.TRANSLATION);
  const [activeTab, setActiveTab] = useState<TabTypes>(
    TabTypes.pill_DESCRIPTION
  );

  const displayContent = {
    [TabTypes.pill_DESCRIPTION]: parse(bookDescription),
    [TabTypes.ABOUT_AUTHORS]: <AuthorsInfo authors={authors} />,
  };

  const switchItems = [
    {
      name: t("pill_details_pill_description"),
      value: TabTypes.pill_DESCRIPTION,
    },
    {
      name: t("pill_details_about_authors"),
      value: TabTypes.ABOUT_AUTHORS,
    },
  ];
  const handleSetActiveTab = (tabType: TabTypes) => {
    setActiveTab(tabType);
  };
  return (
    <div>
      <Switch
        activeItemValue={activeTab}
        handleClick={handleSetActiveTab}
        switchItems={switchItems}
      />

      <Content>{displayContent[activeTab]}</Content>
    </div>
  );
};

export default BookInfoSwitch;
