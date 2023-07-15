import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import { styled } from "styled-components";

const HItems = () => {
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("tv");

  return (
    <Items>
      <Item>
        <Link to="/">
          HOME
          {homeMatch && <Circle layoutId="circle" />}
        </Link>
      </Item>
      <Item>
        <Link to="tv">
          TV
          {tvMatch && <Circle layoutId="circle" />}
        </Link>
      </Item>
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
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
  }
`;

const Circle = styled(motion.span)`
  width: 5px;
  height: 5px;
  background-color: #ffcc00;
  border-radius: 5px;
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export default HItems;
