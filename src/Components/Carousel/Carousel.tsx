import { styled } from "styled-components";
import { IGetDataResult } from "../../api";
import CarouselImg from "./CarouselImg";
import { useEffect, useRef, useState } from "react";
import CarouselBtn from "./CarouselBtn";

interface ICarousel {
  data: IGetDataResult;
}
const Carousel = ({ data }: ICarousel) => {
  return (
    <Wrapper>
      <ImgWrapper>
        {data?.results.slice(0, 5).map((data) => (
          <CarouselImg
            key={data.id}
            title={data.title}
            overview={data.overview}
            backdrop={data.backdrop_path}
          />
        ))}
      </ImgWrapper>
      <button>left</button>
      <button>right</button>
      {/* <CarouselBtn /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  /* height: 500px; */
  display: flex;
`;

export default Carousel;
