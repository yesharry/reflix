import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HItems = () => {
  return (
    <Items>
      {ITEMS.map((items) => (
        <Item key={items.id}>
          <Link to={items.link}>{items.name}</Link>
        </Item>
      ))}
    </Items>
  );
};

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  font-weight: 500;
  font-size: 20px;
  color: #a5a5a5;
  margin-left: 20px;

  &:hover {
    color: white;
  }
`;

export default HItems;

const ITEMS = [
  {
    id: 0,
    name: "HOME",
    link: "/",
  },
  {
    id: 1,
    name: "TV",
    link: "tv",
  },
  {
    id: 2,
    name: "MY",
    link: "my",
  },
];
