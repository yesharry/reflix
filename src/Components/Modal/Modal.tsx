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
      <ModalBox layoutId={modalMatch?.params.id + listType}>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top, black, transparent),url(${makeImagePath(
              data?.backdrop_path || ""
            )})`,
          }}
        />
        <ModalContent>
          <PosterBox>
            <PosterImg src={makeImagePath(data?.poster_path || "", "w500")} />
          </PosterBox>
          <DetailBox>
            <TitleK>{data?.title}</TitleK>
            <TitleE>{data?.original_title}</TitleE>
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
  width: 800px;
  height: 75%;
  background-color: #1b1b1b;
  border-radius: 15px;

  position: fixed;
  top: 150px;
  left: 0;
  right: 0;

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

  padding: 20px 30px;
`;

const ModalContent = styled.div`
  display: flex;
  padding-left: 20px;
  position: relative;
  top: -100px;
`;

const PosterBox = styled.div`
  width: 190px;
  height: 240px;
`;

const PosterImg = styled.img`
  width: 100%;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleK = styled.h2``;

const TitleE = styled.p``;

const TagLine = styled.p``;

const Overview = styled.div``;

export default Modal;
