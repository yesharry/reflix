import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { styled } from "styled-components";

interface ISlideBtn {
  // onClickToArrowBtn: (right: number) => void;
  increaseIndex: () => void;
  decreaseIndex: () => void;
}

const SlideBtn = ({ increaseIndex, decreaseIndex }: ISlideBtn) => {
  return (
    <BtnContainer>
      <BtnBox onClick={decreaseIndex}>
        <IoIosArrowBack />
      </BtnBox>
      <BtnBox onClick={increaseIndex}>
        <IoIosArrowForward />
      </BtnBox>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
`;

const BtnBox = styled.div``;

export default SlideBtn;
