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
  .back {
    cursor: pointer;
  }
  .forward {
    cursor: pointer;
  }
`;

export default SlideBtn;
