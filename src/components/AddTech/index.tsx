import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { ITechs } from "../../pages/Dashboard";
import api from "../../services/Api";
import StyledPai from "../../styles/StyledAddCourse";

export type IAddTech = {
  setAddTech: React.Dispatch<SetStateAction<boolean>>;
}

const AddCourse = ({ setAddTech }: IAddTech) => {
  const { register, handleSubmit } = useForm<ITechs>();
  const token = localStorage.getItem('token')

  const onSubmit = (tech:ITechs) => {    
    api
      .post(`/users/techs`, tech, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
      .then(() => {
        setAddTech(false);
        toast.success("Tech adicionada com sucesso!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      })
      .catch(() => {
        toast.error(`Você já tem esta tech!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      });
  };

  return (
    <StyledPai>
      <div className="addCourse">
        <header>
          <h2>Cadastrar Tecnologias</h2>
          <AiOutlineClose className="icon" onClick={() => setAddTech(false)} />
        </header>

        <form
          className="input-tech-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Nome</label>
          <input
            {...register("title", { required: true })}
            placeholder="Nome da tecnologia"
          />
          <label>Selecionar Status</label>
          <select {...register("status")}>
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledPai>
  );
};

export default AddCourse;
