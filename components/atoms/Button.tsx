import styled, { css } from "styled-components";
import { theme } from "style/theme";

type ButtonProps = {
  secondary?: boolean;
  tertiary?: boolean;
  small?: boolean;
};

const Button = styled.button<ButtonProps>`
  font-weight: 600;
  border-radius: 3rem;
  border: none;
  outline: none;
  padding: 0.5rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: white;
  background-color: var(--green100);

  &:hover {
    @media screen and ${theme.breakpoints.bigTablet} {
      transition: transform 0.3s ease-out;
      cursor: pointer;
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07);
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--blue100);
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: inherit;
      border: 1px solid var(--bootstrapDark);
      color: var(--black100);
    `}

    ${({ small }) =>
    small &&
    css`
      font-size: 1.1rem;
      padding: 0.2rem 0.7rem;
      font-weight: 500;
    `}
`;

export default Button;
