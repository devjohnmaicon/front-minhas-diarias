import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import styled from "styled-components";
import { autoLogin, signIn } from "../../redux/features/login/thunkLogin";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErros = false;

    if (credentials.email == "" || credentials.password == "") {
      formErros = true;
      toast.error("Email e senha são obrigatórios.");
      return;
    }

    if (formErros) return;

    dispatch(signIn(credentials));

    setCredentials(INITIAL_STATE);

    navigate("/home");
  };

  useEffect(() => {
    const hasLoged = JSON.parse(localStorage.getItem("user"));

    dispatch(autoLogin(hasLoged));
  }, []);

  return (
    <Container className="animate__animated animate__fadeIn">
      <Top>
        <div className="logo">
          <h2>MY DAILY</h2>
        </div>
      </Top>

      <Form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Cadastro de usuário</h2>
        </div>

        <div className="box-form">
          <input
            name="name"
            type="text"
            placeholder="Nome"
            value={credentials.name}
            onChange={handleChange}
          />
        </div>

        <div className="box-form">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>

        <div className="box-form">
          <input
            name="password"
            type="password"
            placeholder="Senha"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <div className="box-form">
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            // value={credentials.confirmPassword}
            // onChange={handleChange}
          />
        </div>

        <div className="box-buttons">
          <button className="btn-cancel">Registrar</button>
        </div>
      </Form>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  max-width: 768px;
  margin: 0 auto;


`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    h2 {
      font-size: 4rem;
      font-weight: bold;
      color: #eeeeee;
    }
  }
`;

export const Form = styled.form`
  /* background-color: red; */
  /* border: 2px solid #eeeeee; */
  border-radius: 1rem;
  margin: 0 auto;

  padding: 1.5rem;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .box-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: #eeeeee;

    label {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    input {
      font-size: 1.4rem;
      height: 3rem;
      padding-left: 0.5rem;
      border-radius: 10px;
    }
  }

  .link {
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;

    a {
      color: #eeeeee;
      text-decoration: underline;
      letter-spacing: 1px;
    }
  }

  .box-buttons {
    text-align: center;

    button {
      background-color: #bd4b4b;

      cursor: pointer;
      font-size: 1.2rem;
      border-radius: 10px;
      color: #eeeeee;
      font-weight: 600;
      width: 100%;
      padding: 1.2rem;
    }
  }
`;
