import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Translations } from "enums";
import styled from "styled-components";
import Switch from "components/molecules/Switch";
import parse from "html-react-parser";

const Content = styled.div`
  * {
    font-size: 1.5rem;
  }
`;

const AuthorsInfoWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  .author {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--grey200);
    margin: 0.5rem 0;
  }
`;
const AuthorsInfo = ({ authors }: any) => (
  <AuthorsInfoWrapper>
    {authors.map((author: any) => (
      <div key={author}>
        <p className="author">{author.name.toUpperCase()}</p>{" "}
        <div>{parse(author.description)}</div>
      </div>
    ))}
  </AuthorsInfoWrapper>
);

enum TabTypes {
  PILL_DESCRIPTION,
  ABOUT_AUTHORS,
}
type BookInfoSwitchProps = {
  pillDescription: string;
  authors: object[];
};
const BookInfoSwitch = ({ pillDescription, authors }: BookInfoSwitchProps) => {
  const { t } = useTranslation(Translations.MAIN);
  const [activeTab, setActiveTab] = useState<TabTypes>(
    TabTypes.PILL_DESCRIPTION
  );

  const displayContent = {
    [TabTypes.PILL_DESCRIPTION]: parse(pillDescription),
    [TabTypes.ABOUT_AUTHORS]: <AuthorsInfo authors={authors} />,
  };

  const switchItems = [
    {
      name: t("pill_details_pill_description"),
      value: TabTypes.PILL_DESCRIPTION,
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
