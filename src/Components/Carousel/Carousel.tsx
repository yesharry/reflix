import { styled } from "styled-components";
import { IGetDataResult } from "../../api";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { makeImagePath } from "../../utils";
import CarouselBtn from "./CarouselBtn";

interface ICarousel {
  data: IGetDataResult;
}

const Carousel = ({ data }: ICarousel) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);

  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(true);
      toggleLeaving();
      setIndex((prev) => (prev === 0 ? 4 : prev - 1));
    }
  };

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(false);
      toggleLeaving();
      setIndex((prev) => (prev >= 4 ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= 4 ? 0 : prev + 1));
      setBack(false);
    }, 5000);
    return () => clearInterval(timer);
  }, [index, data?.results]);

  return (
    <Wrapper>
      <BannerContainer>
        <CarouselBtn
          decreaseIndex={decreaseIndex}
          increaseIndex={increaseIndex}
        />
        <AnimatePresence
          initial={false}
          custom={back}
          onExitComplete={toggleLeaving}
        >
          <BannerImg
            key={index}
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            custom={back}
          >
            {data?.results.slice(index, index + 1).map((data) => (
              <Banner key={data.id} bgPhoto={makeImagePath(data.backdrop_path)}>
                <Title>{data.title ? data.title : data.name}</Title>
                <Overview>{data.overview}</Overview>
              </Banner>
            ))}
          </BannerImg>
        </AnimatePresence>
      </BannerContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1250px;
  height: 550px;
  margin-bottom: 170px;
  overflow: hidden;
  position: relative;
  top: 100px;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BannerImg = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const bannerVariants = {
  hidden: (back: boolean) => {
    return {
      x: back === false ? window.outerWidth + 1 : -window.outerWidth - 1,
    };
  },
  visible: () => {
    return { x: 0 };
  },
  exit: (back: boolean) => {
    return {
      x: back === false ? -window.outerWidth - 1 : window.outerWidth + 1,
    };
  },
};

const Banner = styled.div<{ bgPhoto: string }>`
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
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  width: 70%;
  font-size: 20px;
  line-height: 30px;
  overflow: hidden;
`;

export default Carousel;
