import styled from "styled-components";
const BubbleBackground = "/images/bubble-background.png";
import { theme } from "style/theme";

type QuoteProps = {
  text: string;
  author: string;
};
const QuoteWrapper = styled.div`
  text-align: center;
  font-weight: 500;
  padding: 15px;
  font-size: var(--xs);
  background: url(${BubbleBackground});
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;

  @media screen and ${theme.breakpoints.bigTablet} {
    font-size: var(--m);
  }
`;

const Quote = ({ text, author }: QuoteProps) => (
  <QuoteWrapper>
    <p>{text}</p>
    <p>
      <i>{author}</i>
    </p>
  </QuoteWrapper>
);

export default Quote;
