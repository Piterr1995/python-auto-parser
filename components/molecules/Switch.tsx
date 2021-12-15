import styled from "styled-components";
import { theme } from "style/theme";
const SwitchWrapper = styled.div`
  margin: 10px 10px 20px 0;
  span {
    font-weight: 500;
    margin-right: 15px;
    padding-bottom: 10px;
    cursor: pointer;

    &.active {
      font-weight: 600;
      border-bottom: 1px solid var(--green100);
    }
  }

  @media screen and ${theme.breakpoints.bigTablet} {
    font-size: var(--m);
  }
`;

type SwitchItem = {
  value: string | number;
  name: string;
};
type SwitchProps = {
  activeItemValue: string | number;
  handleClick: (value: any) => void;
  switchItems: SwitchItem[];
};
const Switch = ({ activeItemValue, handleClick, switchItems }: SwitchProps) => (
  <SwitchWrapper>
    {switchItems.map((item) => (
      <span
        key={item.value}
        className={activeItemValue === item.value ? "active" : "inactive"}
        onClick={() => handleClick(item.value)}
      >
        {item.name}
      </span>
    ))}
  </SwitchWrapper>
);

export default Switch;
