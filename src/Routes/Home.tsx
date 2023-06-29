// import Carousel from "../Components/Carousel/Carousel";
import { useQuery } from "react-query";
import {
  IGetDataResult,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";

import Slider from "../Components/Slider/Slider";

const Home = () => {
  const { data: popularMovies } = useQuery<IGetDataResult>(
    ["popular"],
    getPopularMovies
  );

  const { data: nowPlayingMovies } = useQuery<IGetDataResult>(
    ["nowPlaying"],
    getNowPlayingMovies
  );

  const { data: upcomingMovies } = useQuery<IGetDataResult>(
    ["upcoming"],
    getUpcomingMovies
  );

  const { data: topRatedMovies } = useQuery<IGetDataResult>(
    ["topRated"],
    getTopRatedMovies
  );

  return (
    <>
      {/* <Carousel /> */}

      <Slider title={"POPULAR"} data={popularMovies as IGetDataResult} />

      <Slider title={"NOW PLAYING"} data={nowPlayingMovies as IGetDataResult} />

      <Slider title={"UPCOMING"} data={upcomingMovies as IGetDataResult} />

      <Slider title={"TOP RATED"} data={topRatedMovies as IGetDataResult} />
    </>
  );
};

export default Home;
