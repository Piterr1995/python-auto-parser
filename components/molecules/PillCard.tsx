import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import Spacer from "components/atoms/Spacer";

const CardBackground = "/images/dynamic-style.png";

const Card = styled.div`
  border-radius: 1.5rem;
  background: url(${CardBackground});
  border: 4px solid #cacaca;
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
  }

  .data {
    padding: 1rem;

    h1.title {
      margin: 1rem 0 0.5rem;
    }

    h2.authors {
      margin: 0.5rem 0 1rem;
      color: var(--grey100);
    }
    .time-wrapper {
      display: flex;
      align-items: center;

      svg {
        color: inherit;
      }
      span {
        margin-left: 0.5px;
        font-size: 1.4rem;
      }
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  transition: 0.3s;
  :hover {
    transform: scale(1.05, 1.05);
  }
`;

type PillCardProps = {
  cover: string;
  title: string;
  authors: string;
  timeToRead: number;
  destinationUrl: string;
};
const PillCard = ({
  cover,
  title,
  authors,
  timeToRead,
  destinationUrl,
}: PillCardProps) => {
  return (
    <A href={destinationUrl}>
      <Card className="shadow">
        <img src={cover} />
        <div className="data">
          <h1 className="title">{title}</h1>
          <h2 className="authors">{authors}</h2>
          <div className="time-wrapper">
            <AiOutlineClockCircle size={20} />
            <Spacer x={3} /> <span>{timeToRead} min.</span>
          </div>
        </div>
      </Card>
    </A>
  );
};

export default PillCard;
