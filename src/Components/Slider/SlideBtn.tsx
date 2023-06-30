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
  height: 100%;
  font-size: 50px;
  color: #a5a5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;

  .back {
    cursor: pointer;
    background-color: #00000057;

    &:hover {
      color: white;
    }
  }
  .forward {
    cursor: pointer;
    background-color: #00000057;

    &:hover {
      color: white;
    }
  }
`;

export default SlideBtn;
