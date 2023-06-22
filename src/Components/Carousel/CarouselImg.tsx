import { styled } from "styled-components";
import { makeImagePath } from "../../utils";

interface ICarouselImg {
  img: string;
  title: string;
  overview: string;
}
const CarouselImg = ({ img, title, overview }: ICarouselImg) => {
  return (
    <ImgContainer bgPhoto={makeImagePath(img)}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </ImgContainer>
  );
};

const ImgContainer = styled.div<{ bgPhoto: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: end;

  padding: 40px;
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
