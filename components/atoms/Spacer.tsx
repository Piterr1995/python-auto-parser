import styled, { css } from "styled-components";

type SpacerProps = {
  y?: number;
  x?: number;
  bg?: string;
} & React.HTMLProps<HTMLDivElement>;
const Spacer = styled.div<SpacerProps>`
  height: ${({ y }) => (y ? 0.25 * y : 0)}rem;
  background-color: ${({ bg }) => bg ?? "inherit"};

  ${({ x }) =>
    x &&
    css`
      display: inline-block;
      width: ${x * 0.25}rem;
    `}
`;

export default Spacer;
