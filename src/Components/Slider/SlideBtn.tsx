import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { styled } from "styled-components";

interface ISlideBtn {
  onClickToArrowBtn: (right: number) => void;
}

const SlideBtn = ({ onClickToArrowBtn }: ISlideBtn) => {
  return (
    <BtnContainer>
      <IoIosArrowBack className="back" onClick={() => onClickToArrowBtn(-1)} />
      <IoIosArrowForward
        className="forward"
        onClick={() => onClickToArrowBtn(1)}
      />
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  .forward {
    cursor: pointer;
  }
`;

export default SlideBtn;
