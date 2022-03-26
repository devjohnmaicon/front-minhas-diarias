import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { autoLogin, signIn } from "../../redux/features/login";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signIn(credentials));

    setCredentials(INITIAL_STATE);

    navigate("/home");
  };

  useEffect(() => {
    const hasLoged = JSON.parse(localStorage.getItem("user"));

    dispatch(autoLogin(hasLoged));
  }, []);

  return (
    <Container>
      <Top>
        <div className="logo">
          <h2>MY DAILY</h2>
        </div>
      </Top>

      <Form onSubmit={handleSubmit}>
        <div className="box-form">
          <input
            name="email"
            type="email"
            placeholder="Digite seu email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>

        <div className="box-form">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        {/* <div className="forget">
          <a href="">Esqueci minha senha</a>
        </div> */}

        <div className="box-buttons">
          <button className="btn-cancel">Entrar</button>
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
    padding: 1rem 0;

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

  .forget {
    display: flex;
    justify-content: flex-end;
    margin: 1.8rem 0;
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
