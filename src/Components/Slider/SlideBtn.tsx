import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { styled } from "styled-components";

interface ISBtn {
  decreaseIndex: () => void;
  increaseIndex: () => void;
}

const SlideBtn = ({ decreaseIndex, increaseIndex }: ISBtn) => {
  return (
    <>
      <BtnContainer>
        <Back>
          <IoIosArrowBack onClick={decreaseIndex} />
        </Back>
        <Forward>
          <IoIosArrowForward onClick={increaseIndex} />
        </Forward>
      </BtnContainer>
    </>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 50px;
  color: #a5a5a5;
  position: relative;
  top: 150px;
`;

const Back = styled.div`
  background-color: #00000057;
  position: absolute;
  left: 0;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Forward = styled.div`
  background-color: #00000057;
  position: absolute;
  right: 0;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export default SlideBtn;
