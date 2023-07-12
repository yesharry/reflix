import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { IGetDataResult, getSearch } from "../api";
import { styled } from "styled-components";
import { makeImagePath } from "../utils";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data } = useQuery<IGetDataResult>(
    ["searchData", keyword],
    async () => keyword && getSearch(keyword)
  );

  return (
    <Wrapper>
      <CountContainer>
        <CountText>프로그램 검색 결과</CountText>
        <Count>{data?.results.length}</Count>
      </CountContainer>
      <SearchContainer>
        {data?.results.map((search) => (
          <SearchBox>
            <SearchImg
              key={search.id}
              src={makeImagePath(search.poster_path, "w500")}
            />
            <Title>{search.title ? search.title : search.name}</Title>
          </SearchBox>
        ))}
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CountContainer = styled.div`
  width: 1250px;
  display: flex;
  justify-content: start;
  margin: 30px 0;
`;

const CountText = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: #a5a5a5;
  margin-right: 10px;
`;

const Count = styled(CountText)`
  color: #ffcc00;
`;

const SearchContainer = styled.div`
  width: 1250px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const SearchImg = styled.img`
  width: 240px;
  height: 360px;
  border-radius: 15px;
  margin: 0 7px;

  cursor: pointer;
`;

const Title = styled.p`
  color: #a5a5a5;
  font-weight: 400;
  margin: 10px 7px;
`;

export default Search;
