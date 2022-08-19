import React from "react";
import Log from "../components/Log";

const Connect = () => {
  return (
    <div className="connection-page">
      <Log />

      <div className="img-container">
        <h1>Bienvenue sur GestLiv&nbsp;!</h1>
        <img src="./img/logo.png" className="connect-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Connect;
