import { styled } from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IGetDataResult } from "../../api";

interface IMovieData {
  data: IGetDataResult;
}

const CarouselBtn = ({ data }: IMovieData) => {
  return (
    <BtnContainer>
      <IoIosArrowBack className="back" />
      <IoIosArrowForward className="forward" />
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #a5a5a5;
  font-size: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  .back {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  .forward {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

export default CarouselBtn;
