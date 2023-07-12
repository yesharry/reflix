import { useQuery } from "react-query";
import Slider from "../Components/Slider/Slider";
import { IGetDataResult, LIST_TYPE, getPopularTv, getTopRatedTv } from "../api";
import { styled } from "styled-components";
import Carousel from "../Components/Carousel/Carousel";

const Tv = () => {
  const { data: popularTv } = useQuery<IGetDataResult>(
    [LIST_TYPE[4], "popularTv"],
    getPopularTv
  );

  const { data: topRatedTv } = useQuery<IGetDataResult>(
    [LIST_TYPE[5], "topRatedTv"],
    getTopRatedTv
  );

  return (
    <Wrapper>
      <Carousel data={topRatedTv as IGetDataResult} />
      <Slider
        title={"POPULAR"}
        listType={LIST_TYPE[4]}
        linkName="tv"
        mediaType="tv"
        data={popularTv as IGetDataResult}
      />
      <Slider
        title={"TOP RATED"}
        listType={LIST_TYPE[5]}
        linkName="tv"
        mediaType="tv"
        data={topRatedTv as IGetDataResult}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Tv;
