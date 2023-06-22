import { styled } from "styled-components";
import { IGetDataResult } from "../../api";
import { makeImagePath } from "../../utils";

interface IMovieData {
  data: IGetDataResult;
}

const CarouselImg = ({ data }: IMovieData) => {
  return (
    <>
      {data?.results.slice(0, 5).map((data) => (
        <BannerLi key={data.id}>
          <Banner bgPhoto={makeImagePath(data.backdrop_path)}>
            <Title>{data.title}</Title>
            <Overview>{data.overview}</Overview>
          </Banner>
        </BannerLi>
      ))}
    </>
  );
};

const BannerLi = styled.li``;

const Banner = styled.div<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
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

export default CarouselImg;
