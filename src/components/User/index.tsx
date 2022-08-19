import React from "react";

const User = () => {
  let user = localStorage.getItem('user')
  let courseModule = localStorage.getItem('course_module')
  return (
    <div className="user-container">
      <h1 className="user-name">Olá, {user}</h1>
      <h2 className="user-module">{courseModule}</h2>
    </div>
  );
};

export default User;
