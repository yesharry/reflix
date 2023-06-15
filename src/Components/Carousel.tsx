import { useQuery } from "react-query";
import { IGetDataResult, getPopularMovies } from "../api";
import { styled } from "styled-components";
import CarouselBtn from "./CarouselBtn";
import CarouselImg from "./CarouselImg";

const Carousel = () => {
  const { data: movieData } = useQuery<IGetDataResult>(
    ["movieData"],
    getPopularMovies
  );

  return (
    <Wrapper>
      {/* 
      <CarouselBtn />
      {data?.results.slice(0, 5).map((image) => (
        <Banner key={image.id} bgPhoto={makeImagePath(image.backdrop_path)}>
          <Title>{image.title}</Title>
          <Overview>{image.overview}</Overview>
        </Banner>
      ))} 
      */}
      <CarouselBtn />
      <CarouselImg data={movieData as IGetDataResult} />
    </Wrapper>
  );
};

// const Container = styled.div`
//   width: 80%;
//   height: 500px;
//   border-radius: 15px;
//   margin: 0 auto;
//   position: relative;
//   overflow: hidden;
// `;

// const Banner = styled.div<{ bgPhoto: string }>`
//   width: 100%;
//   height: 100%;
//   background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
//     url(${(props) => props.bgPhoto});
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   padding: 50px 25px;
//   top: 0;
//   left: 0;
// `;

// const Title = styled.h2`
//   font-size: 50px;
//   font-weight: 600;
//   margin-bottom: 20px;
// `;

// const Overview = styled.p`
//   width: 50%;
//   font-size: 18px;
//   line-height: 30px;
// `;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: #ffc0cb69; */
  display: flex;
  justify-content: center;
`;

export default Carousel;
