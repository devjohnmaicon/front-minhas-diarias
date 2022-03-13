import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import { api } from "../../assets/api";
import { StoreDailies } from "../../contexts/Dailies/DailiesContext";

import { getDate } from "../../utils/inputMasks";

const initialValues = {
  type: "1",
  value: "",
  user_id: "b24c471e-47cb-49a2-9ffa-aac10ce9fdb6",
  date: `${getDate()}`,
};

export const AddDaily = () => {
  const [daily, setDaily] = useState(initialValues);

  const { addDaily, updateDaily } = StoreDailies();
  const navigate = useNavigate();

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDaily({ ...daily, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dailywithID = { id, ...daily };

    id ? updateDaily(dailywithID) : addDaily(daily);

    navigate("/");
  };

  useEffect(() => {
    const getDaily = async () => {
      const { data } = await api.post("/getDaily", {
        id: id,
      });

      setDaily(data);
    };

    id && getDaily();
  }, []);

  return (
    <ContainerModal>
      <Form onSubmit={handleSubmit}>
        <h2>{id ? "Editar Diária" : "Novo Lançamento"}</h2>

        <div className="box-form">
          <label htmlFor="">Tipo</label>
          <select name="type" value={daily.type} onChange={handleChange}>
            <option value="1">Diária</option>
            <option value="2">Pagamento</option>
          </select>
        </div>

        <div className="box-form">
          <label htmlFor=""> R$ / Valor </label>
          <input
            name="value"
            type="number"
            placeholder="60"
            className="input-value"
            value={daily.value}
            onChange={handleChange}
          />
        </div>
        <div className="box-form">
          <label htmlFor="">Data</label>
          <input
            name="date"
            type="date"
            className="input-value"
            value={daily.date}
            onChange={handleChange}
          />
        </div>

        <div className="box-form">
          <label htmlFor="">Descrição</label>
          <textarea
            name="description"
            cols="30"
            rows="6"
            className="input-text_area"
            onChange={handleChange}
          />
        </div>

        <div className="box-buttons">
          <button type="submit" className="btn-submit">
            Salvar
          </button>

          <Link className="btn-cancel" to={"/"}>
            Cancelar
          </Link>
        </div>
      </Form>
    </ContainerModal>
  );
};

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  max-width: 768px;

  margin: 0 auto;
`;

export const Form = styled.form`
  background-color: #171717;
  height: 95%;
  width: 70%;
  min-height: 500px;
  min-width: 300px;
  border-radius: 2%;
  box-shadow: 0px 10px 13px -7px #000000;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1.4rem 1rem 0;

  h2 {
    font-size: 1.6rem;
    color: #fff;
  }

  .box-form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.4rem;
      color: #fff;
      font-weight: 300;
    }

    select {
      font-size: 1.4rem;
      background-color: #ededed;
    }

    .input-value {
      font-size: 1.4rem;
      padding: 0.5rem;
      background-color: #ededed;
    }

    .input-text_area {
      resize: none;
      border-radius: 5px;
      padding: 0.6rem;
      font-size: 1.2rem;
      background-color: #ededed;
    }
  }

  .box-buttons {
    display: flex;
    justify-content: center;
    gap: 10%;
    width: 100%;
    margin: 1rem 0;

    .btn-submit {
      padding: 0.8rem;
      background-color: #bd4b4b;
      color: #ededed;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
    }

    .btn-cancel {
      cursor: pointer;
      background-color: transparent;

      font-size: 1rem;
      color: #fff;

      display: flex;
      align-items: center;
    }
  }
`;
