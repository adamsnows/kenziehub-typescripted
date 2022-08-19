import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import StyledPai from "../../styles/StyledDeleteCourse";
import { useForm } from "react-hook-form";
import api from "../../services/Api";
import { toast } from "react-toastify";
import { ITechs } from "../../pages/Dashboard";

type IEditTech = {
  id: string | boolean,
  onClose: () => void;
  techs: ITechs[];
}

const EditTech = ({ id, onClose, techs }:IEditTech) => {
  const token = localStorage.getItem('token')
  const tech = techs.find((tech) => tech.id === id);
  const { register, handleSubmit } = useForm({ defaultValues: tech });
  const onSubmit = (tech:ITechs) => {
    api.put(`/users/techs/${tech.id}`, tech, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }).then(() => {
      toast.success("Tecnologia alterada com sucesso!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
      });
      onClose();
    });
  };
  const onDelete = () => {
    api.delete(`/users/techs/${tech?.id}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }).then(() => {
      toast.success("Tecnologia excluida.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
      });
      onClose();
    });
  };
  return (
    <StyledPai>
      <div className="addCourse">
        <header>
          <h2>Editar Tecnologia: {tech?.title}</h2>
          <AiOutlineClose className="icon" onClick={onClose} />
        </header>

        <form
          className="input-tech-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Selecionar Status</label>
          <select {...register("status")}>
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
          <div className="buttons">
            <button className="edit">Salvar alterações</button>
            <button type="button" className="delete" onClick={onDelete}>
              Excluir tecnologia
            </button>
          </div>
        </form>
      </div>
    </StyledPai>
  );
};

export default EditTech;
