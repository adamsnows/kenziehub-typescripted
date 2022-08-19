import React, {SetStateAction} from 'react'
import { ITechs } from '../../pages/Dashboard';

type ICourses = {
  techs: ITechs[];
  setShowEdit: React.Dispatch<SetStateAction<boolean | string | any>>;
}

const Courses = ({ techs, setShowEdit }:ICourses) => {
  return (
    <div className="languages-container">
      {techs.map((tech, index) => (
        <div
          key={tech.id}
          id={`${index}`}
          className="language"
          onClick={() => {
            setShowEdit(tech.id)
          }}
        >
          <h2 className="language-name">{tech.title}</h2>
          <h2>{tech.status}</h2>
        </div>
      ))}
    </div>
  );
};

export default Courses;
