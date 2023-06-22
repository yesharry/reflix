import { styled } from "styled-components";
import { IGetDataResult } from "../../api";
import { makeImagePath } from "../../utils";
import { useEffect, useRef, useState } from "react";

interface IMovieData {
  data: IGetDataResult;
}

const Carousel3 = ({ data }: IMovieData) => {
  const [current, setCurrent] = useState<number>(0);
  const slideRef = useRef("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) =>
        current < data.results.slice(0, 5).length - 1 ? current + 1 : 0
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [current, data?.results.slice(0, 5)]);

  return (
    <Container ref={slideRef}>
      {data?.results.slice(0, 5).map((data) => (
        <Banner key={data.id} bgPhoto={makeImagePath(data.backdrop_path)}>
          <Title>{data.title}</Title>
          <Overview>{data.overview}</Overview>
        </Banner>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  height: 100%;
  /* overflow: hidden; */
  /* display: flex; */
`;

const Banner = styled.div<{ bgPhoto: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  width: 50%;
  font-size: 18px;
  line-height: 30px;
`;

export default Carousel3;
