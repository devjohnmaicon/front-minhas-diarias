import React, { useEffect, useState } from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding, Header } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";
import { ImExit } from "react-icons/im";

import { Loading } from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDailies,
  getDailies,
  toggleModal,
} from "../../redux/features/dailies";
import { AddDaily } from "../../components/AddDaily";
import { logout } from "../../redux/features/login";

export const Home = () => {
  const dispatch = useDispatch();

  const { user_id, user_name } = useSelector((state) => state.login);
  const { data, debt, modal, loading } = useSelector((state) => state.dailies);

  const [showconfig, setShowconfig] = useState(false);

  useEffect(() => {
    dispatch(getDailies(user_id));
  }, []);

  const toggleConfig = () => {
    setShowconfig(!showconfig);
  };

  const exit = () => {
    dispatch(logout());
    dispatch(clearDailies());
    localStorage.removeItem("user");
  };

  return (
    <AppContainer>
      {loading && <Loading />}
      {modal && <AddDaily />}

      <Header>
        <div className="user-name">
          <span>{user_name}</span>
        </div>

        <div className="user-profile" onClick={toggleConfig}>
          <img src={require("../../assets/images/profile.png")} alt="" />
          <br />
          {showconfig && (
            <div className="menu-config animate__animated animate__fadeInRight">
              <span onClick={exit}>
                Sair <ImExit />
              </span>
            </div>
          )}
        </div>
      </Header>

      <Headding>
        <h3>Valor da divida</h3>
        <div className="box-heading animate__animated animate__fadeInDown">
          <span>{`R$ ${debt},00`}</span>
        </div>
      </Headding>

      <Box className="animate__animated animate__fadeInUp">
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
