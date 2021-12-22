import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";

import { Translations } from "enums";
import Modal from "components/molecules/Modal";
import { theme } from "style/theme";

const StyledH1 = styled.h1`
  margin-bottom: 6px;

  @media screen and ${theme.breakpoints.bigTablet} {
    font-size: var(--l);
  }
`;
const ChapterList = styled.ul<{ fontSize: number }>`
  list-style: none;
  padding: 10px;
  margin-top: 0;
  color: var(--black100);
`;

const ChapterListItem = styled.li<{ active: boolean }>`
  font-weight: ${({ active }) => (active ? 600 : 400)};
  border-bottom: 1px solid lightgray;
  padding: 1rem 0;

  &:hover {
    color: var(--green100);
    cursor: pointer;
  }
  svg {
    color: var(--black100);
  }
  &:last-child {
    border: none;
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    font-size: 1.4rem;
    padding: 1rem 0;
  }
`;
type Chapter = {
  title: string;
};

type ChaptersModalProps = {
  isVisible: boolean;
  chapters: Chapter[];
  currentChapterIndex: number;
  handleChapterChange: (chapterIndex: number) => void;
  onRequestClose: () => void;
};

const ChaptersModal = ({
  isVisible,
  chapters,
  handleChapterChange,
  currentChapterIndex,
  onRequestClose,
}: ChaptersModalProps) => {
  const { t } = useTranslation(Translations.MAIN);
  return (
    <Modal isVisible={isVisible} onRequestClose={onRequestClose}>
      <StyledH1 className="text-center">
        {t("pill_content_navigation")}{" "}
      </StyledH1>

      <ChapterList>
        {chapters.map((chapter, index) => (
          <ChapterListItem
            key={index}
            onClick={() => handleChapterChange(index)}
            active={index === currentChapterIndex}
          >
            {index + 1}. {chapter.title}{" "}
            {index !== currentChapterIndex && <BsArrowRight size={13} />}
          </ChapterListItem>
        ))}
      </ChapterList>
    </Modal>
  );
};

export default ChaptersModal;
