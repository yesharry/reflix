import { styled } from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CarouselBtn = () => {
  return (
    <BtnWrapper>
      <IoIosArrowBack className="back" />
      <IoIosArrowForward className="forward" />
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #a5a5a5;
  font-size: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  cursor: pointer;

  .back {
    &:hover {
      color: white;
    }
  }
  .forward {
    &:hover {
      color: white;
    }
  }
`;

export default CarouselBtn;
