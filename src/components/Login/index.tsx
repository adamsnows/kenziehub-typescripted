import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useState } from "react";
import { HubContext } from "../../contexts/HubProvider";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const LoginComponent = () => {
  const [type, setType] = useState("password");
  const { onSubmitLogin } = useContext(HubContext);
  const { register, handleSubmit } = useForm();

  return (
    <>
      <span className="login">Login</span>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <label className="email-title">E-mail</label>
        <input
          className="login-input"
          type="email"
          {...register("email", {
            required: true,
          })}
          placeholder="seu-email@quentemail.com"
        />
        <label className="password-title">Senha</label>
        <div className="bgPassword">
          <input
            className="password-input"
            type={type}
            {...register("password", {
              required: "Por favor, coloque sua senha.",
            })}
            placeholder="Digite aqui sua senha"
          />
          {type === "password" ? (
            <BsEyeSlash onClick={() => setType("text")} />
          ) : (
            <BsEye onClick={() => setType("password")} />
          )}
        </div>
        <button className="enter-button">Entrar</button>
        <span className="register">Ainda não possui uma conta?</span>
        <Link to="/register" className="link-button">
          <button className="register-button">Cadastre-se</button>
        </Link>
      </form>
    </>
  );
};

export default LoginComponent;
