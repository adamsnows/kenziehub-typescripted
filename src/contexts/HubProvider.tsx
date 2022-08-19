import React from 'react'
import { createContext, ReactNode } from "react";
import { FieldValues } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/Api";

export type IContext = {
  children: ReactNode,
}
type IAccount = {
  email: string,
  password: string,
}


type IHubContext = {
  onSubmitLogin: (argo0: FieldValues ) => void;
  onSubmitRegister: (argo0: FieldValues) => void;
}

export const HubContext = createContext<IHubContext>({} as IHubContext);

const HubProvider = ({ children }: IContext) => {
    const navigate = useNavigate()
    const onSubmitLogin = (account: FieldValues) => {
      console.log(account)
    api
      .post("/sessions", account)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.name);
        localStorage.setItem("course_module", res.data.user.course_module);
        localStorage.setItem("id", res.data.user.id);
        toast.success("Logado com sucesso!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
        navigate("/dashboard");
      })
      .catch(() =>
        toast.error(`Nome de usuário ou senha inválido.`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };
  const onSubmitRegister = ({ bio, contact, course_module, email, name, password }: FieldValues) => {
    api
      .post("/users", {
        bio: bio,
        contact: contact,
        course_module: course_module,
        email: email,
        name: name,
        password: password,
      })
      .then((res) => {
        toast.success("Registrado com sucesso!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
        navigate("/login");
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      });
  };

  return <HubContext.Provider value={{ onSubmitLogin, onSubmitRegister }}> {children} </HubContext.Provider>;
};

export default HubProvider;
