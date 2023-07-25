import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { login, logout, onUserStateChange } from "../../api/firebase";

const HLogin = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Container>
      {!user ? (
        <Btn onClick={login}>LOGIN</Btn>
      ) : (
        <Btn onClick={logout}>LOGOUT</Btn>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-left: 20px;
  font-weight: 500;
`;

const Btn = styled.div`
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

export default HLogin;
