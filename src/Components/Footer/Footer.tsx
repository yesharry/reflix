import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Text>Copyright© 리플릭스(주) All rights reserved.</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border-top: 1px solid #2f2f2f;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: white;
`;

export default Footer;
