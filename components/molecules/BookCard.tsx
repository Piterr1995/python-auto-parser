import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";

const Card = styled.div`
  border-radius: 1.5rem;
  padding: 1rem;

  img {
    aspect-ratio: 1 / 1;
  }

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

type BookCardProps = {
  cover: string;
  title: string;
  authors: string;
  timeToRead: number;
  destinationUrl: string;
};
const BookCard = ({
  cover,
  title,
  authors,
  timeToRead,
  destinationUrl,
}: BookCardProps) => {
  return (
    <A href={destinationUrl}>
      <Card className="shadow">
        <img src={cover} />
        <div className="data">
          <h1 className="title">{title}</h1>
          <h2 className="authors">{authors}</h2>
          <div className="time-wrapper">
            <AiOutlineClockCircle size={20} /> <span>{timeToRead} min.</span>
          </div>
        </div>
      </Card>
    </A>
  );
};

export default BookCard;
