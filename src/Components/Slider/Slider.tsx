import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import { IGetDataResult } from "../../api";
import { makeImagePath } from "../../utils";
import { useState } from "react";

interface ISlideData {
  data: IGetDataResult;
}

const offset = 5;

const Slider = ({ data }: ISlideData) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovie = data.results.length;
      const maxIndex = Math.floor(totalMovie / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  return (
    <SliderContainer>
      <Btn>prev</Btn>
      <AnimatePresence onExitComplete={toggleLeaving}>
        <Row
          key={index}
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
        >
          {data?.results
            .slice(offset * index, offset * index + offset)
            .map((data) => (
              <Box
                key={data.id}
                bgPhoto={makeImagePath(data.poster_path, "w500")}
              />
            ))}
        </Row>
      </AnimatePresence>
      <Btn onClick={increaseIndex}>next</Btn>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
`;

const Btn = styled.button``;

const Row = styled(motion.div)`
  background-color: #00ffae79;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
};

const Box = styled(motion.div)<{ bgPhoto: string }>`
  width: 240px;
  height: 360px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  border-radius: 15px;

  cursor: pointer;
`;

export default Slider;
