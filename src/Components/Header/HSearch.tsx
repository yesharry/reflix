import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface IForm {
  keyword: string;
}

const HSearch = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const inputAnimation = useAnimation();

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({ scaleX: 0 });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
  };

  return (
    <Search onSubmit={handleSubmit(onValid)}>
      <motion.svg
        onClick={toggleSearch}
        animate={{ x: searchOpen ? -180 : 0 }}
        transition={{ type: "linear" }}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </motion.svg>
      <Input
        {...register("keyword", { required: true, minLength: 2 })}
        animate={inputAnimation}
        initial={{ scaleX: 0 }}
        transition={{ type: "linear" }}
        placeholder="검색어를 입력해주세요.."
      />
    </Search>
  );
};

const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 20px;
  }
  cursor: pointer;
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  background-color: transparent;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  font-size: 16px;
  color: #a5a5a5;
  padding: 10px 10px;
  padding-left: 30px;
  position: absolute;
  right: 0px;
  z-index: -1;
`;

export default HSearch;
