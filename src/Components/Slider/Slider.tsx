import { useState } from "react";
import { IGetDataResult } from "../../api";
import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import { makeImagePath } from "../../utils";
import SlideBtn from "./SlideBtn";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

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

const boxVariant = {
  normal: {
    scale: 1,
  },
  active: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

interface ISlider {
  title: string;
  listType: string;
  linkName: string;
  mediaType: string;
  data: IGetDataResult;
}

const offset = 5;

const Slider = ({ data, title, listType, linkName, mediaType }: ISlider) => {
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

  // click modal
  const navigate = useNavigate();

  const bigMatch: PathMatch<string> | null = useMatch(
    `${linkName}/${listType}/:id`
  );

  const onBoxClicked = (menu: string, type: string, id: number) => {
    navigate(`/${menu}/${type}/${id}`);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
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
                <Box
                  key={data.id}
                  variants={boxVariant}
                  initial="normal"
                  whileHover="active"
                  transition={{ type: "tween" }}
                  layoutId={data.id + "" + listType}
                  bgPhoto={makeImagePath(data.poster_path)}
                  onClick={() => {
                    onBoxClicked(linkName, listType, data.id);
                  }}
                />
              ))}
          </Row>
        </AnimatePresence>
        <SlideBtn decreaseIndex={decreaseIndex} increaseIndex={increaseIndex} />
      </SliderContainer>
      <AnimatePresence>
        {bigMatch ? (
          <Modal
            dataId={Number(bigMatch?.params.id)}
            listType={listType}
            linkName={linkName}
            requestUrl={mediaType}
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1250px;
  overflow: hidden;
  margin-bottom: 70px;
`;

const SliderContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
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

const Box = styled(motion.div)<{ bgPhoto: string }>`
  width: 240px;
  height: 360px;
  border-radius: 15px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  float: left;
  margin: 0 5px;

  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export default Slider;
