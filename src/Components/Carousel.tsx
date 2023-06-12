import { useQuery } from "react-query";
import { IGetMoviesResult, getPopularMovies } from "../api";
import { styled } from "styled-components";
import { makeImagePath } from "../utils";

const Carousel = () => {
  const { data } = useQuery<IGetMoviesResult>("movies", getPopularMovies);

  return (
    <Container>
      {data?.results.slice(0, 5).map((image) => (
        <Banner key={image.id} bgPhoto={makeImagePath(image.backdrop_path)}>
          <Title>{image.title}</Title>
          <Overview>{image.overview}</Overview>
        </Banner>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  width: 80%;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 50px 25px;
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

export default Carousel;
