import styled from "styled-components";
const BubbleBackground = "/images/bubble-background.png";

type QuoteProps = {
  text: string;
  author: string;
};
const QuoteWrapper = styled.div`
  text-align: center;
  font-weight: 500;
  padding: 15px;
  font-size: 1.3rem;
  background: url(${BubbleBackground});
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
