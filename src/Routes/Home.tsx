import { useQuery } from "react-query";
import Carousel from "../Components/Carousel";
import { IGetMoviesResult, getPopularMovies } from "../api";
import { styled } from "styled-components";

const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies"],
    getPopularMovies
  );

  // console.log(data);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Carousel />
          home
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Loader = styled.div``;

export default Home;
