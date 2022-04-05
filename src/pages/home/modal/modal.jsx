import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import {
  clearDailyEdition,
  createDaily,
  toggleModal,
  updateDaily,
} from "../../../redux/features/user";

import { getDate } from "../../../utils/inputMasks";
import { toast } from "react-toastify";

export const Modal = ({ openModal, closeModal }) => {
  const dispatch = useDispatch();

  const { user_id } = useSelector((state) => state.login);
  const { edit, dailyEdit } = useSelector((state) => state.user.edition);

  const [daily, setDaily] = useState({
    type: "1",
    value: "",
    user: user_id,
    date: `${getDate()}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "value"
      ? setDaily({ ...daily, [name]: parseFloat(value) })
      : setDaily({ ...daily, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErros = false;

    if (daily.value == "" || daily.value < 0) {
      formErros = true;
      toast.error("Preencha o campo valor.");
      return;
    }

    if (formErros) return;

    edit ? dispatch(updateDaily(daily)) : dispatch(createDaily(daily));

    close();
  };

  const close = () => {
    dispatch(toggleModal(false));
    edit && dispatch(clearDailyEdition());
  };

  useEffect(() => {
    edit && setDaily(dailyEdit);
  }, []);

  return (
    <ContainerModal>
      <Form
        onSubmit={handleSubmit}
        className="menu-config animate__animated animate__slideInUp"
      >
        <h2>{edit ? "Editar Diária" : "Novo Lançamento"}</h2>

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
            placeholder="** OPCIONAL **"
            className="input-text_area"
            onChange={handleChange}
          />
        </div>

        <div className="box-buttons">
          <button type="submit" className="btn-submit">
            Salvar
          </button>

          <button className="btn-cancel" onClick={close}>
            Cancelar
          </button>
        </div>
      </Form>
    </ContainerModal>
  );
};

export const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: #171717;
  min-height: 500px;
  min-width: 300px;
  border-radius: 2%;
  box-shadow: 0px 10px 13px -7px #000000;

  height: 90%;
  width: 80%;

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
