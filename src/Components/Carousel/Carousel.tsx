import { useQuery } from "react-query";
import { IGetDataResult, getPopularMovies } from "../../api";
import { styled } from "styled-components";
import CarouselBtn from "./CarouselBtn";
import CarouselImg from "./CarouselImg";

const Carousel = () => {
  const { data: movieData } = useQuery<IGetDataResult>(
    ["movieData"],
    getPopularMovies
  );

  return (
    <CarouselContainer>
      <button>prev</button>
      <Div>
        {movieData?.results.slice(0, 5).map((data) => (
          <CarouselImg
            key={data.id}
            img={data.backdrop_path}
            title={data.title}
            overview={data.overview}
          />
        ))}
      </Div>
      <button>next</button>
      {/* <CarouselBtn data={movieData as IGetDataResult} /> */}
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  background-color: #ffc0cb7d;
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  width: 1200px;
  height: 500px;

  /* display: flex; */

  overflow: hidden;
`;

export default Carousel;
