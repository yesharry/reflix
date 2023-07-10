import { styled } from "styled-components";
import { IGetDataResult } from "../../api";

interface ICarousel {
  data: IGetDataResult;
}

const Carousel = ({ data }: ICarousel) => {
  return <Wrapper>Carousel</Wrapper>;
};

const Wrapper = styled.div``;

export default Carousel;
