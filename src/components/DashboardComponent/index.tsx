import React, { SetStateAction } from "react";
import StyledDashboard from "../../styles/StyledDashboard";
import DashboardContent from "../DashboardContent/index";
import { ITechs } from "../../pages/Dashboard/index"

export type IPropsDashboard = {
  setAddTech: React.Dispatch<SetStateAction<boolean>>;
  addTech: boolean,
  setShowEdit: React.Dispatch<SetStateAction<boolean>>,
  techs: ITechs[],
  setTechs: React.Dispatch<SetStateAction<ITechs[]>>,
  showEdit: boolean,    
}

const DashboardComponent = ({ setAddTech, addTech, setShowEdit, techs, setTechs, showEdit}:IPropsDashboard) => {
  return (
    
      <StyledDashboard>
        <DashboardContent  showEdit={showEdit} setAddTech={setAddTech} addTech={addTech} setShowEdit={setShowEdit} techs={techs} setTechs={setTechs}/>
      </StyledDashboard>
    
  );
};

export default DashboardComponent;
