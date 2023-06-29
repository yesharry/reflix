import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { styled } from "styled-components";

interface ISBtn {
  decreaseIndex: () => void;
  increaseIndex: () => void;
}

const SlideBtn = ({ decreaseIndex, increaseIndex }: ISBtn) => {
  return (
    <BtnContainer>
      <IoIosArrowBack className="back" onClick={decreaseIndex} />
      <IoIosArrowForward className="forward" onClick={increaseIndex} />
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  font-size: 50px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 10;

  .back {
    cursor: pointer;
    background-color: #00000057;
  }
  .forward {
    cursor: pointer;
    background-color: #00000057;
  }
`;

export default SlideBtn;
