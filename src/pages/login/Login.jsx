import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Store } from "../../contexts/auth/AuthContext";

export const Login = () => {
  const [credentials, setCredentials] = useState({});

  const { state, handleLogin } = Store();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await handleLogin(credentials);

    if (status === 200) {
      navigate("/home");
    }

  };

  return (
    <Container>
      <Top>
        <div className="logo">
          <img src={require("../../assets/images/logo.png")} alt="" />
        </div>
      </Top>

      <Form onSubmit={handleSubmit}>
        <div className="box-form">
          <input
            name="email"
            type="email"
            placeholder="Digite seu email"
            // value={daily.value}
            onChange={handleChange}
          />
        </div>

        <div className="box-form">
          <input
            name="password"
            type="password"
            placeholder="Password"
            // value={daily.value}
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
    height: 300px;
    width: 300px;
    margin-bottom: 1rem;
    img {
      height: 100%;
      width: 100%;
    }
  }

  h2 {
    font-size: 2rem;
    color: #eeeeee;
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
