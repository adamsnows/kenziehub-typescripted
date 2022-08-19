import React from "react";
import StyledLogin from "../../styles/StyledLogin";
import Background from "../../components/Background/index";
import LoginComponent from "../../components/Login/index";
import KenzieHub from "../../components/KenzieHub/index";

const Login = () => {
  return (
    <Background>
      <KenzieHub />
      <StyledLogin>
        <LoginComponent />
      </StyledLogin>
    </Background>
  );
};

export default Login;
