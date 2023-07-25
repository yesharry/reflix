import { useQuery } from "react-query";
import { styled } from "styled-components";
import { IDetail, getDetailData } from "../../api";
import { useMatch, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { makeImagePath } from "../../utils";

interface IModal {
  dataId: number;
  listType: string;
  linkName: string;
  requestUrl: string;
  returnUrl?: string;
}

const Modal = ({
  dataId,
  listType,
  linkName,
  requestUrl,
  returnUrl,
}: IModal) => {
  const navigate = useNavigate();
  const modalMatch = useMatch(`/${linkName}/${listType}/:id`);

  const { data } = useQuery<IDetail>(
    [listType + dataId, "detail" + dataId],
    () => getDetailData(requestUrl, dataId) || null
  );

  const onOverlayClicked = () => {
    if (linkName === "home") linkName = "";

    if (returnUrl) {
      navigate(returnUrl);
    } else {
      navigate(`/${linkName}`);
    }
  };

  return (
    <>
      <Overlay
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onOverlayClicked}
      />
      <ModalBox className="scroll" layoutId={modalMatch?.params.id + listType}>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top, black, transparent),url(${makeImagePath(
              data?.backdrop_path || ""
            )})`,
          }}
        />
        <ModalContent>
          <PosterBox>
            <PosterImg src={makeImagePath(data?.poster_path || "")} />
          </PosterBox>
          <DetailBox>
            <TitleK>{data?.title ? data?.title : data?.name}</TitleK>
            <TitleE>{data?.original_title}</TitleE>

            <InfoBox>
              <Release>개봉일 {data?.release_date}</Release>
              <Genres>{data?.genres[0].name}</Genres>
            </InfoBox>

            <TagLine>{data?.tagline}</TagLine>
            <Overview>{data?.overview}</Overview>
          </DetailBox>
        </ModalContent>
      </ModalBox>
    </>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 99;
`;

const ModalBox = styled(motion.div)`
  width: 750px;
  height: 600px;
  background-color: #1b1b1b;
  border-radius: 15px;

  position: fixed;
  top: 100px;
  left: 0;
  right: 0;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: #cccccc84;
  }

  margin: 0 auto;
  z-index: 100;
`;

const Cover = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  display: flex;
  align-items: end;

  padding: 30px;
`;

const ModalContent = styled.div`
  display: flex;
  padding: 0 20px;
  position: relative;
  top: -100px;
`;

const PosterBox = styled.div`
  width: 200px;
  height: 290px;
`;

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const DetailBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const TitleK = styled.h2`
  font-size: 35px;
  font-weight: 400;
  padding-top: 30px;
  margin-bottom: 5px;
`;

const TitleE = styled.p`
  font-size: 18px;
  margin-bottom: 25px;
`;

const InfoBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 18px;
`;

const Release = styled.p`
  margin-right: 20px;
`;

const Genres = styled.p``;

const TagLine = styled.p`
  color: #ffcc00;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export default Modal;
