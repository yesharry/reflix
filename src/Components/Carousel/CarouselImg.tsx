import { styled } from "styled-components";
import { makeImagePath } from "../../utils";

interface IImg {
  title?: string;
  overview: string;
  backdrop: string;
}

interface ImgProps {
  bgPhoto: string;
}

const CarouselImg = ({ title, overview, backdrop }: IImg) => {
  return (
    <ImgContainer>
      <ImgBox bgPhoto={makeImagePath(backdrop)}>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
      </ImgBox>
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  width: 1250px;
  height: 500px;
  position: relative;
  margin: 0 10px;
`;

const ImgBox = styled.div<ImgProps>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: end;

  padding: 40px 30px;
  position: absolute;
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
