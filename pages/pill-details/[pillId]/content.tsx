import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import router from "next/router";

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

import Button from "components/atoms/Button";
import { useAppContext } from "hooks/useAppContext";
import { useToggle } from "hooks/useToggle";
import Navbar from "bones/pill-details/content/Navbar";
import ChaptersModal from "bones/pill-details/content/ChaptersModal";
import ProgressBar from "bones/pill-details/content/ProgressBar";
import TutorialModal from "bones/pill-details/content/TutorialModal";
import { Translations } from "enums";
import { theme } from "style/theme";
import { pills } from "data";

const LightMatBackground = "/images/dynamic-style.png";
const DarkMatBackground = "/images/beanstalk-dark.png";

type CommonProps = {
  fontSize: number;
  isDarkTheme: boolean;
};

const StyledH1 = styled.h1<Pick<CommonProps, "fontSize">>`
  line-height: ${({ fontSize }) => fontSize * 1.75 + "rem"};
  margin-bottom: 8px;
`;
const ChapterAndTitleWrapper = styled.span<CommonProps>`
  color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? "white" : "#777777"} !important;
  font-weight: 400;
  font-style: italic;
  font-size: ${({ fontSize }) => fontSize * 0.75}rem;
`;

const getBackground = (isDarkTheme: boolean, isBackgroundRugged: boolean) => {
  if (isDarkTheme && isBackgroundRugged) {
    return `url(${DarkMatBackground})`;
  } else if (isDarkTheme && !isBackgroundRugged) {
    return "var(--bootstrapDark)";
  } else if (!isDarkTheme && isBackgroundRugged) {
    return `url(${LightMatBackground})`;
  } else {
    return "#fafafa";
  }
};
const Container = styled.div<{
  isDarkTheme: boolean;
  isBackgroundRugged: boolean;
}>`
  background: ${({ isDarkTheme, isBackgroundRugged }) =>
    getBackground(isDarkTheme, isBackgroundRugged)};
  background-repeat: repeat;
  position: relative;
  p,
  h1,
  h2,
  ul,
  li,
  button {
    font-family: "Arial", sans-serif;
    background: inherit;
    color: ${({ isDarkTheme, theme }) =>
      isDarkTheme ? "white" : "var(--black100)"};
  }
`;

const ContentContainer = styled.div<Pick<CommonProps, "fontSize">>`
  user-select: none;
  min-height: 100vh;
  padding: 10px 15px;

  .chapterTitle {
    font-size: ${({ fontSize }) => fontSize * 1.25}rem;
  }
  .content {
    * {
      font-size: ${({ fontSize }) => fontSize}rem;
      line-height: ${({ fontSize }) => fontSize * 1.5 + "rem"};
    }
    h1 {
      font-size: ${({ fontSize }) => fontSize * 1.05}rem;
    }
    strong {
      font-size: ${({ fontSize }) => fontSize * 0.9}rem;
    }
    p {
      margin: 2rem 0;
    }
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    width: 700px;
    margin: auto;
    text-align: justify;
  }
`;

const NavigationButtonsWrapper = styled.div<CommonProps>`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: ${({ fontSize }) => fontSize * 0.85}rem;
    border: 1px solid
      ${({ isDarkTheme, theme }) =>
        isDarkTheme ? "white" : "var(--bootstrapDark)"};
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    margin-top: 4rem;
  }
`;

const isDarkThemePreferredLocalStorageKey = "darkTheme";

// FONT SIZE IN REM UNITS
const defaultFontSize = 1.7;
const fontSizeOptions = [
  1.3,
  1.5,
  defaultFontSize,
  1.9,
  2.1,
  2.3,
  2.5,
  2.7,
  2.9,
];
const preferredFontSizeLocalStorageKey = "zzpjwb";

const Content = ({ chapters, title }: { chapters: any; title: string }) => {
  const { t } = useTranslation(Translations.MAIN);

  const { state } = useAppContext();

  const [fontSize, setFontSize] = useState(defaultFontSize);

  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isDarkTheme, toggleIsDarkTheme] = useToggle(false);
  const [isBackgroundRugged, toggleIsBackgroundRugged] = useToggle(true);

  useEffect(() => {
    const isDarkThemePreferred = !!localStorage.getItem(
      isDarkThemePreferredLocalStorageKey
    );
    const preferredFontSize = localStorage.getItem(
      preferredFontSizeLocalStorageKey
    );

    if (isDarkThemePreferred && !isDarkTheme) {
      toggleIsDarkTheme();
    }
    if (preferredFontSize) {
      setFontSize(+preferredFontSize);
    }
  }, []);
  const [isNavbarAndProgressVisible, toggleIsNavbarAndProgressVisible] =
    useToggle(true);
  const [isChaptersModalVisible, toggleIsChaptersModalVisible] =
    useToggle(false);
  const checkIfThereIsBiggerFontSizeAvailable = () => {
    const fontSizeOptionsLength = fontSizeOptions.length;
    const currentFontSizeIndex = fontSizeOptions.indexOf(fontSize);
    if (currentFontSizeIndex < fontSizeOptionsLength - 1) {
      return true;
    }
    return false;
  };

  const calculateProgress = () => {
    const chaptersLength = chapters.length;
    const progress = Math.ceil(
      (currentChapterIndex / (chaptersLength - 1)) * 100
    );
    return progress;
  };
  const progress = calculateProgress();

  const checkIfThereIsNextChapter = () => {
    const chaptersLength = chapters.length;
    return currentChapterIndex < chaptersLength - 1;
  };
  const canNextChapter = checkIfThereIsNextChapter();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const moveToNextChapterAndScrollTop = () => {
    setCurrentChapterIndex((prev) => prev + 1);
    scrollToTop();
  };

  const goHome = () => {
    router.push("/");
  };
  const checkIfThereIsPreviousChapter = () => {
    return currentChapterIndex > 0;
  };
  const canPreviousChapter = checkIfThereIsPreviousChapter();

  const moveToPreviousChapterAndScrollTop = () => {
    setCurrentChapterIndex((prev) => prev - 1);
    scrollToTop();
  };

  const getNextFontSizeIndex = () => {
    const currentFontSizeIndex = fontSizeOptions.indexOf(fontSize);
    return currentFontSizeIndex + 1;
  };

  const handleFontSizeChange = () => {
    const isBiggerFontSizeAvailable = checkIfThereIsBiggerFontSizeAvailable();
    if (isBiggerFontSizeAvailable) {
      const nextFontSizeIndex = getNextFontSizeIndex();
      const nextFontSize = fontSizeOptions[nextFontSizeIndex];

      setFontSize(nextFontSize);
    } else {
      setFontSize(fontSizeOptions[0]);
    }
  };
  const handleChapterChange = (chapterIndex: number) => {
    setCurrentChapterIndex(chapterIndex);
    toggleIsChaptersModalVisible();
  };
  useEffect(() => {
    localStorage.setItem(preferredFontSizeLocalStorageKey, String(fontSize));
  }, [fontSize]);
  return (
    <>
      <ChaptersModal
        handleChapterChange={handleChapterChange}
        chapters={chapters}
        isVisible={isChaptersModalVisible}
        onRequestClose={toggleIsChaptersModalVisible}
        currentChapterIndex={currentChapterIndex}
      />
      <TutorialModal />
      <Container
        isDarkTheme={isDarkTheme}
        isBackgroundRugged={isBackgroundRugged}
      >
        <Navbar
          isDarkTheme={isDarkTheme}
          isBackgroundRugged={isBackgroundRugged}
          toggleIsDarkTheme={toggleIsDarkTheme}
          isVisible={isNavbarAndProgressVisible}
          handleToggleIsChaptersModalVisible={toggleIsChaptersModalVisible}
          handleFontSizeChange={handleFontSizeChange}
          toggleisBackgroundRugged={toggleIsBackgroundRugged}
        />
        <ContentContainer fontSize={fontSize}>
          <div onClick={toggleIsNavbarAndProgressVisible}>
            <StyledH1 className="chapterTitle" fontSize={fontSize}>
              {chapters[currentChapterIndex].title}{" "}
            </StyledH1>
            <ChapterAndTitleWrapper
              fontSize={fontSize}
              isDarkTheme={isDarkTheme}
              className="no-space"
            >
              {currentChapterIndex + 1} / {chapters.length}, {title}
            </ChapterAndTitleWrapper>

            <hr />

            <div className="content">
              {parse(chapters[currentChapterIndex].text)}
            </div>
          </div>
          <NavigationButtonsWrapper
            isDarkTheme={isDarkTheme}
            fontSize={fontSize}
          >
            {canPreviousChapter ? (
              <Button onClick={moveToPreviousChapterAndScrollTop}>
                {t("pill_content_previous_page")}
              </Button>
            ) : (
              <span />
            )}
            {canNextChapter ? (
              <Button onClick={moveToNextChapterAndScrollTop}>
                {t("pill_content_next_page")}
              </Button>
            ) : (
              <Button onClick={goHome}>Zakończ</Button>
            )}
          </NavigationButtonsWrapper>
        </ContentContainer>
        <ProgressBar
          progress={progress}
          isVisible={isNavbarAndProgressVisible}
          isDarkTheme={isDarkTheme}
        />
      </Container>
    </>
  );
};
export default Content;

export function getStaticPaths() {
  const paths = pills.map((pill) => ({
    params: {
      pillId: `${pill.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locale,
}: {
  params: any;
  locale: any;
}) {
  const { pillId } = params;
  const pill = pills.find((pill) => pill.id === +pillId);
  const { title, chapters }: any = pill;

  return {
    props: {
      title,
      chapters,
      ...(await serverSideTranslations(locale, [Translations.MAIN])),
    },
    revalidate: 3600,
  };
}
