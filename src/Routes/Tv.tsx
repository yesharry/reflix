import { useQuery } from "react-query";
import Slider from "../Components/Slider/Slider";
import {
  IGetDataResult,
  getAiringTodayTv,
  getOnTheAirTv,
  getPopularTv,
  getTopRatedTv,
} from "../api";

const Tv = () => {
  const { data: airingToday } = useQuery<IGetDataResult>(
    ["airingToday"],
    getAiringTodayTv
  );

  const { data: onTheAir } = useQuery<IGetDataResult>(
    ["onTheAir"],
    getOnTheAirTv
  );

  const { data: popularTv } = useQuery<IGetDataResult>(
    ["popularTv"],
    getPopularTv
  );

  const { data: topRatedTv } = useQuery<IGetDataResult>(
    ["topRatedTv"],
    getTopRatedTv
  );

  return (
    <>
      <Slider title={"AIRING TODAY"} data={airingToday as IGetDataResult} />
      <Slider title={"ON THE AIR"} data={onTheAir as IGetDataResult} />
      <Slider title={"POPULAR"} data={popularTv as IGetDataResult} />
      <Slider title={"TOP RATED"} data={topRatedTv as IGetDataResult} />
    </>
  );
};

export default Tv;
