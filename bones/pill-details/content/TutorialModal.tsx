import { useEffect } from "react";
import styled from "styled-components";
import { FaRegHandPointer } from "react-icons/fa";
import { BsMoonStars, BsSun, BsListOl } from "react-icons/bs";
import { BiFontSize } from "react-icons/bi";
import { IoLibrarySharp } from "react-icons/io5";

import Modal from "components/molecules/Modal";
import { useToggle } from "hooks/useToggle";
import { useTranslation } from "react-i18next";
import { Translations } from "enums";

const tutorialLocalStorageKey = "tuttiFrutti";

const InstructionsTable = styled.table`
  margin-top: 2.5rem;

  * {
    color: var(--black100);
  }
`;

const IconsTd = styled.td`
  width: 20%;
  padding: 0.5rem;
  svg {
    vertical-align: middle;
  }
`;
const TutorialModal = () => {
  const { t } = useTranslation(Translations.MAIN);
  const [isTutorialFinished, toggleIsTutorialFinished] = useToggle(true);
  const [isModalVisible, toggleIsModalVisible] = useToggle(!isTutorialFinished);

  useEffect(() => {
    if (!localStorage.getItem(tutorialLocalStorageKey)) {
      toggleIsTutorialFinished;
    }
  }, [toggleIsTutorialFinished]);
  const tutorialItems = [
    {
      icon: FaRegHandPointer,
      description: t("pill_content_tutorial_text_press_info"),
    },
    {
      icon: IoLibrarySharp,
      description: t("pill_content_tutorial_library_info"),
    },
    {
      icon: BsListOl,
      description: t("pill_content_tutorial_chapter_list_info"),
    },
    {
      icon: BsSun,
      description: t("pill_content_tutorial_theme_change_info"),
    },
    {
      icon: BiFontSize,
      description: t("pill_content_tutorial_font_size_change_info"),
    },
  ];

  const handleToggleModalAndAddFinishInfoToLocalStorage = () => {
    localStorage.setItem(tutorialLocalStorageKey, "1");
    toggleIsModalVisible();
  };
  return (
    <Modal
      isVisible={isModalVisible}
      onRequestClose={handleToggleModalAndAddFinishInfoToLocalStorage}
    >
      <h1 className="text-center">{t("pill_content_tutorial_title")}</h1>
      <InstructionsTable>
        <tbody>
          {tutorialItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <tr key={index}>
                <IconsTd>
                  <Icon size={30} />
                </IconsTd>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </InstructionsTable>
    </Modal>
  );
};

export default TutorialModal;
