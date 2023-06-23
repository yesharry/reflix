// import Carousel from "../Components/Carousel/Carousel";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { IGetDataResult, getNowPlayingMovies, getPopularMovies } from "../api";

import Slider from "../Components/Slider/Slider";

const Home = () => {
  // const { data: popularMovies } = useQuery<IGetDataResult>(
  //   ["popular"],
  //   getPopularMovies
  // );

  const { data: nowPlayingMovies } = useQuery<IGetDataResult>(
    ["nowPlaying"],
    getNowPlayingMovies
  );

  return (
    <Wrapper>
      {/* <Carousel /> */}
      <Slider data={nowPlayingMovies as IGetDataResult} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

// const CategoryTitle = styled.p`
//   font-size: 24px;
//   line-height: 36px;
//   font-weight: 400;
// `;

export default Home;
