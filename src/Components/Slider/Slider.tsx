import { useState } from "react";
import { IGetDataResult } from "../../api";
import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import { makeImagePath } from "../../utils";
import SlideBtn from "./SlideBtn";

interface ISlider {
  data: IGetDataResult;
}

const offset = 5;

const Slider = ({ data }: ISlider) => {
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
    <SliderContainer>
      <SlideBtn decreaseIndex={decreaseIndex} increaseIndex={increaseIndex} />
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
  );
};

const SliderContainer = styled.div`
  width: 100%;
  background-color: #ffc0cb86;
  position: relative;
`;

const Row = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  background-color: #87cfeb79;
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
`;

export default Slider;
