import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import { IGetDataResult } from "../../api";
import { makeImagePath } from "../../utils";
import { useState } from "react";
import SlideBtn from "./SlideBtn";

interface ISlideData {
  data: IGetDataResult;
}

const offset = 5;

const Slider = ({ data }: ISlideData) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);

  // const onClickToArrowBtn = (right: number) => {
  //   return 0;
  // };

  console.log(data);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(false);
      toggleLeaving();
      const totalMovie = data.results.length - 1;
      const maxIndex = Math.floor(totalMovie / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(true);
      toggleLeaving();
      const totalMovie = data.results.length - 1;
      const maxIndex = Math.floor(totalMovie / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  // const changeIndex = () => {
  //   if (data) {
  //     if (leaving) return;
  //     toggleLeaving();
  //     const totalMovie = data.results.length - 1;
  //     const maxIndex = Math.floor(totalMovie / offset) - 1;
  //     back === false
  //       ? setIndex((prev) => (prev === maxIndex ? 0 : prev - 1))
  //       : setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  //   }
  // };

  return (
    <SliderContainer>
      {/* <SlideBtn onClickToArrowBtn={onClickToArrowBtn} /> */}
      <SlideBtn increaseIndex={increaseIndex} decreaseIndex={decreaseIndex} />
      <AnimatePresence
        initial={false}
        onExitComplete={toggleLeaving}
        custom={{ back }}
      >
        <Row
          key={index}
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={back}
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
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
`;

// const Btn = styled.button``;

const Row = styled(motion.div)`
  background-color: #00ffae79;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
`;

const rowVariants = {
  hidden: ({ back }: { back: boolean }) => ({
    x: back ? -outerWidth - 5 : outerWidth + 5,
  }),
  visible: {
    x: 0,
  },
  exit: ({ back }: { back: boolean }) => ({
    x: back ? outerWidth + 5 : -outerWidth - 5,
  }),
};

// const rowVariants = {
//   hidden: (right: number) => {
//     return {
//       x: right === 1 ? window.innerWidth + 5 : -window.innerWidth - 5,
//     };
//   },
//   visible: {
//     x: 0,
//     y: 0,
//   },
//   exit: (right: number) => {
//     return {
//       x: right === -1 ? window.innerWidth - 5 : -window.innerWidth + 5,
//     };
//   },
// };

// const rowVariants = {
//   hidden: (right: number) => {
//     if (right === 1) {
//       return { x: window.outerWidth + 5 };
//     } else {
//       return { x: -window.outerWidth - 5 };
//     }
//   },
//   visible: {
//     x: 0,
//   },
//   // exit: (right: number) => {
//   //   if (right === 1) {
//   //     return { x: -window.outerWidth - 5 };
//   //   } else {
//   //     return { x: window.outerWidth + 5 };
//   //   }
//   // },
// };

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
