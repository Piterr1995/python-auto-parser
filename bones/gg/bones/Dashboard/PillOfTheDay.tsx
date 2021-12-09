import styled from "styled-components";
import parse from "html-react-parser";

const Wrapper = styled.div`
  padding: 15px;
`;
type PullOfTheDayProps = {
  title: string;
  content: string;
};

const PillOfTheDay = ({ title, content }: PullOfTheDayProps) => (
  <Wrapper>
    <div>{parse(content)}</div>
    <div>{title}</div>
  </Wrapper>
);

export default PillOfTheDay;
