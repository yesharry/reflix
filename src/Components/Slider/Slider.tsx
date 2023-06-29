import { useState } from "react";
import { IGetDataResult } from "../../api";
import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import { makeImagePath } from "../../utils";
import SlideBtn from "./SlideBtn";

interface ISlider {
  title: string;
  data: IGetDataResult;
}

const offset = 5;

const Slider = ({ data, title }: ISlider) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);

  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(true);
      toggleLeaving();
      const totalMovies = data.results.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(false);
      toggleLeaving();
      const totalMovies = data.results.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SlideBtn decreaseIndex={decreaseIndex} increaseIndex={increaseIndex} />
      <SliderContainer>
        <AnimatePresence
          initial={false}
          custom={back}
          onExitComplete={toggleLeaving}
        >
          <Row
            key={index}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            custom={back}
          >
            {data?.results
              .slice(offset * index, offset * index + offset)
              .map((data) => (
                <Box key={data.id} bgPhoto={makeImagePath(data.poster_path)} />
              ))}
          </Row>
        </AnimatePresence>
      </SliderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 360px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin-bottom: 20px;
`;

const Row = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const rowVariants = {
  hidden: (back: boolean) => {
    return {
      x: back === false ? window.outerWidth + 5 : -window.outerWidth - 5,
    };
  },
  visible: {
    x: 0,
  },
  exit: (back: boolean) => {
    return {
      x: back === false ? -window.outerWidth - 5 : window.outerWidth + 5,
    };
  },
};

const Box = styled(motion.div)<{ bgPhoto: string }>`
  width: 240px;
  height: 360px;
  border-radius: 15px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  margin: 0 5px;
`;

export default Slider;
