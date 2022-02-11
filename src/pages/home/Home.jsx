import React from "react";
import { AppContainer, Buttons, Headding, Rows } from "./styleHome";

export const Home = () => {
  return (
    <AppContainer>
      <Headding>
        <h2>Débito</h2>
        <div className="box-heading">
          <span>
            <strong>RS</strong> 1.000,00{" "}
          </span>
        </div>
      </Headding>

      <Rows>
        <div className="row">
          <h3>Icon</h3>
          <div className="info">
            <p>Diária</p>
            <span>14/12/2012</span>
          </div>
          <h2>R$ 70,00</h2>
        </div>
        <div className="row">
          <h3>Icon</h3>
          <div className="info">
            <p>Diária</p>
            <span>14/12/2012</span>
          </div>
          <h2>R$ 70,00</h2>
        </div>
        <div className="row">
          <h3>Icon</h3>
          <div className="info">
            <p>Diária</p>
            <span>14/12/2012</span>
          </div>
          <h2>R$ 70,00</h2>
        </div>
        <div className="row">
          <h3>Icon</h3>
          <div className="info">
            <p>Diária</p>
            <span>14/12/2012</span>
          </div>
          <h2>R$ 70,00</h2>
        </div>
        <div className="row">
          <h3>Icon</h3>
          <div className="info">
            <p>Diária</p>
            <span>14/12/2012</span>
          </div>
          <h2>R$ 70,00</h2>
        </div>
      </Rows>

      <Buttons>
        <button>Adicionar</button>
      </Buttons>
    </AppContainer>
  );
};
