import styled from "styled-components";

type ProgressBarProps = {
  progress: number;
  isVisible: boolean;
  isDarkTheme: boolean;
};
const ProgressBarContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: sticky;
  bottom: 0;
  height: 50px;

  align-items: center;
  justify-content: center;
  height: 35px;
`;

const FullProgressWrapper = styled.div<{ isDarkTheme: boolean }>`
  width: 90%;
  border-radius: 5px;
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme ? "var(--bootstrapDark)" : "white"};
  border: 1px solid
    ${({ isDarkTheme }) => (isDarkTheme ? "white" : "var(--black100)")};
  height: 10px;
`;

type ProgressBarFillProps = Pick<ProgressBarProps, "progress" | "isDarkTheme">;
const ProgressBarFill = styled.div<ProgressBarFillProps>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? "white" : "var(--bootstrapDark)"} !important;
`;

const ProgressBar = ({
  progress,
  isVisible,
  isDarkTheme,
}: ProgressBarProps) => (
  <ProgressBarContainer isVisible={isVisible}>
    <FullProgressWrapper isDarkTheme={isDarkTheme}>
      <ProgressBarFill progress={progress} isDarkTheme={isDarkTheme} />
    </FullProgressWrapper>
  </ProgressBarContainer>
);

export default ProgressBar;
