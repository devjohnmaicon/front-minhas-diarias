import React, { useEffect, useState } from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding, Header } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";

import { Loading } from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getDailies, toggleModal } from "../../redux/features/dailies";
import { AddDaily } from "../../components/AddDaily";

export const Home = () => {
  const dispatch = useDispatch();

  const { user_id } = useSelector((state) => state.login);
  const { data, debt, modal, loading } = useSelector((state) => state.dailies);

  useEffect(() => {
    dispatch(getDailies(user_id));
  }, []);

  return (
    <AppContainer>
      {loading && <Loading />}
      {modal && <AddDaily />}

      <Header>
        <div className="user-name">
          <span>Kamila</span>
        </div>
        <div className="user-profile">
          <img src={require("../../assets/images/profile.png")} alt="" />
        </div>
      </Header>

      <Headding>
        <h3>Valor da divida</h3>
        <div className="box-heading">
          <span>{`R$ ${debt},00`}</span>
        </div>
      </Headding>

      <Box>
        <table>
          <tbody>
            {data?.length ? (
              data?.map((daily) => <Row daily={daily} key={daily.id} />)
            ) : (
              <tr
                style={{
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                <td>"Nenhuma Diária cadastrada"</td>
              </tr>
            )}
          </tbody>
        </table>
      </Box>

      <Buttons>
        <a className="btn" onClick={() => dispatch(toggleModal(true))}>
          <BsPlusLg size={"1.2rem"} color="#EDEDED" />
        </a>
      </Buttons>
    </AppContainer>
  );
};
