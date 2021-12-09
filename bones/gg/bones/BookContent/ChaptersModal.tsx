import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";

import Modal from "components/molecules/Modal";

const StyledH1 = styled.h1`
  margin-bottom: 6px;
`;
const ChapterList = styled.ul`
  list-style: none;
  padding: 10px;
  margin-top: 0;
`;

const ChapterListItem = styled.li<{ active: boolean }>`
  font-weight: ${({ active }) => (active ? 600 : 400)};
  color: ${({ theme }) => theme.palette.black100};
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};

  svg {
    color: ${({ theme }) => theme.palette.black100};
  }
  &:last-child {
    border: none;
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
  const { t } = useTranslation("translation");
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
