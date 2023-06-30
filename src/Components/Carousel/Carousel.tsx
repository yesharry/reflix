import { useQuery } from "react-query";
import { IGetDataResult, getPopularMovies } from "../../api";
import { styled } from "styled-components";
// import CarouselBtn from "./CarouselBtn";
import CarouselImg from "./CarouselImg";

const Carousel = () => {
  const { data: movieData } = useQuery<IGetDataResult>(
    ["movieData"],
    getPopularMovies
  );

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: #ffc0cb7d; */
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  top: 95px;
  margin-bottom: 200px;
`;

const Div = styled.div`
  width: 1250px;
  height: 500px;
  /* overflow: hidden; */
  /* position: absolute; */
`;

export default Carousel;
