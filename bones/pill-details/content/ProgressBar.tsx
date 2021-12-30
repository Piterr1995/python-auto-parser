import styled from "styled-components";

type ProgressBarProps = {
  isDarkTheme: boolean;
  isVisible: boolean;
  progress: number;
};
const ProgressBarContainer = styled.div<Pick<ProgressBarProps, "isVisible">>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: sticky;
  bottom: 0;
  align-items: center;
  justify-content: center;
  height: 35px;
`;

const FullProgressWrapper = styled.div<
  Pick<ProgressBarFillProps, "isDarkTheme">
>`
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
  transition: width 0.3s ease;
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme ? "white" : "var(--bootstrapDark)"} !important;
`;

const ProgressBar = ({
  isDarkTheme,
  isVisible,
  progress,
}: ProgressBarProps) => (
  <ProgressBarContainer isVisible={isVisible}>
    <FullProgressWrapper isDarkTheme={isDarkTheme}>
      <ProgressBarFill progress={progress} isDarkTheme={isDarkTheme} />
    </FullProgressWrapper>
  </ProgressBarContainer>
);

export default ProgressBar;
