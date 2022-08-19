import React, { useState } from "react";
import AddCourse from "../../components/AddTech";
import Background from "../../components/Background";
import DashboardComponent from "../../components/DashboardComponent";
import EditTech from "../../components/EditTech";

export type ITechs = {
    title: string,
    status: string,
    id: string,
}

const Dashboard = () => {
  const [addTech, setAddTech] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  //eu fiz merda aqui colocando o ID na porra dessa merda
  const [techs, setTechs] = useState<ITechs[]>([]);

  return (
    <Background>
      <DashboardComponent
        setAddTech={setAddTech}
        addTech={addTech}
        setShowEdit={setShowEdit}
        techs={techs}
        setTechs={setTechs}
        showEdit={showEdit}
      />
      {addTech && <AddCourse setAddTech={setAddTech} />}
      {showEdit && (
        <EditTech
          onClose={() => setShowEdit(false)}
          id={showEdit}
          techs={techs}
        />
      )}
    </Background>
  );
};

export default Dashboard;
