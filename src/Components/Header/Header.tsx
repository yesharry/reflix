import { styled } from "styled-components";
import HItems from "./HItems";
import HSearch from "./HSearch";
import HLogo from "./HLogo";

const Header = () => {
  return (
    <Nav>
      <Col>
        <HLogo />
        <HItems />
      </Col>
      <Col>
        <HSearch />
      </Col>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 40px 60px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
