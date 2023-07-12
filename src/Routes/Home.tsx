import { useQuery } from "react-query";
import {
  IGetDataResult,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  LIST_TYPE,
} from "../api";

import Slider from "../Components/Slider/Slider";
import { styled } from "styled-components";
import Carousel from "../Components/Carousel/Carousel";

const Home = () => {
  const { data: popularMovies } = useQuery<IGetDataResult>(
    [LIST_TYPE[2], "popularMovies"],
    getPopularMovies
  );

  const { data: nowPlayingMovies } = useQuery<IGetDataResult>(
    [LIST_TYPE[0], "nowPlayingMovies"],
    getNowPlayingMovies
  );

  const { data: upcomingMovies } = useQuery<IGetDataResult>(
    [LIST_TYPE[1], "upcomingMovies"],
    getUpcomingMovies
  );

  const { data: topRatedMovies } = useQuery<IGetDataResult>(
    [LIST_TYPE[3], "topRatedMovies"],
    getTopRatedMovies
  );

  return (
    <Wrapper>
      <Carousel data={popularMovies as IGetDataResult} />

      <Slider
        title={"POPULAR"}
        listType={LIST_TYPE[2]}
        linkName={"home"}
        mediaType={"movie"}
        data={popularMovies as IGetDataResult}
      />

      <Slider
        title={"NOW PLAYING"}
        listType={LIST_TYPE[0]}
        linkName={"home"}
        mediaType={"movie"}
        data={nowPlayingMovies as IGetDataResult}
      />

      <Slider
        title={"UPCOMING"}
        listType={LIST_TYPE[1]}
        linkName={"home"}
        mediaType={"movie"}
        data={upcomingMovies as IGetDataResult}
      />

      <Slider
        title={"TOP RATED"}
        listType={LIST_TYPE[3]}
        linkName={"home"}
        mediaType={"movie"}
        data={topRatedMovies as IGetDataResult}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
