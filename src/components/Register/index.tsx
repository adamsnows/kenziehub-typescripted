import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { HubContext } from "../../contexts/HubProvider";

type INewAccount = {
  bio: string,
  contact: string,
  course_module: string,
  email: string,
  name: string,
  password: string,
  confpassword: string,
}

const RegisterComponent = () => {
  const { onSubmitRegister } = useContext(HubContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome necessário pra finalizar o cadastro."),
    email: yup
      .string()
      .required("E-mail necessário para finalizar o cadastro."),
    password: yup
      .string()
      .required("Senha necessária pra finalizar o cadastro.")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Sua senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      ),
    confpassword: yup
      .string()
      .required("A senha de confirmação precisa ser igual a senha.")
      .oneOf(
        [yup.ref("password")],
        "A senha de confirmação não coincide com a senha."
      ),
    bio: yup.string().required("Bio necessária pra finalizar o cadastro"),
    contact: yup
      .string()
      .required("Contato necessário pra finalizar o cadastro"),
  });
  const { register, handleSubmit,formState: { errors }} = useForm<INewAccount>({
    resolver: yupResolver(formSchema),
    reValidateMode: "onSubmit",
  });

  return (
    <>
      <span className="register-create">Crie sua conta</span>
      <span className="register-description">
        Rápido e grátis, vamos nessa!
      </span>
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <label className="label">Nome</label>
        <input
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        <span className="error">{errors.name?.message}</span>
        <label className="label">E-mail</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu e-mail"
        />
        <span className="error">{errors.email?.message}</span>
        <label className="label">Senha</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        <span className="error">{errors.password?.message}</span>
        <label className="label">Confirmar senha</label>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confpassword")}
        />
        <span className="error">{errors.confpassword?.message}</span>
        <label className="label">Bio</label>
        <input type="text" {...register("bio")} placeholder="Fale sobre você" />
        <span className="error">{errors.bio?.message}</span>
        <label className="label">Contato</label>
        <input
          type="tel"
          {...register("contact")}
          placeholder="Opção de contato"
        />
        <span className="error">{errors.contact?.message}</span>
        <label className="label">Selecionar módulo</label>
        <select id="cars" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
          <option value="Quinto módulo (Fullstack Jr)">Quinto Módulo</option>
          <option value="Sexto módulo (Empregabilidade)">Sexto Módulo</option>
          <option value="Full Stack by Kenzie Academy">Ex aluno</option>
        </select>
        <button className="register-button">Cadastrar</button>
        <span className="login">Já possui uma conta?</span>
        <Link to="/login" className="link-button">
          <button className="login-button">Login</button>
        </Link>
      </form>
    </>
  );
};

export default RegisterComponent;
