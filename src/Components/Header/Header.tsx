import { styled } from "styled-components";
import HItems from "./HItems";
import HSearch from "./HSearch";
import HLogo from "./HLogo";

const Header = () => {
  return (
    <>
      <Nav>
        <Col>
          <HLogo />
          <HItems />
        </Col>
        <Col>
          <HSearch />
        </Col>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 95px;
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  /* top: 0; */
  padding: 40px 60px;
  z-index: 100;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
