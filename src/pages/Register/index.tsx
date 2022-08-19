import React from "react";
import Background from "../../components/Background/index";
import StyledRegister from "../../styles/StyledRegister";
import RegisterComponent from "../../components/Register/index";
import KenzieHub from "../../components/KenzieHub/index";

const Register = () => {
  return (
    <Background>
      <KenzieHub />
      <StyledRegister>
        <RegisterComponent />
      </StyledRegister>
    </Background>
  );
};

export default Register;
