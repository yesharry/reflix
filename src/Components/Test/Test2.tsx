import { styled } from "styled-components";
import { makeImagePath } from "../../utils";

interface ICarousel {
  img: string;
  title: string;
  overview: string;
}

const Carousel2 = ({ img, title, overview }: ICarousel) => {
  return (
    <Banner bgPhoto={makeImagePath(img)}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </Banner>
  );
};

const Banner = styled.li<{ bgPhoto: string }>`
  height: 100%;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 30px 40px;
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

export default Carousel2;
