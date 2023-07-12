import { styled } from "styled-components";
import HItems from "./HItems";
import HSearch from "./HSearch";
import HLogo from "./HLogo";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Col>
          <HLogo />
          <HItems />
        </Col>
        <Col>
          <HSearch />
        </Col>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
`;

const Nav = styled.nav`
  width: 1250px;
  height: 95px;
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
