import React, { useEffect, useState } from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding, Header } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";

import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { api } from "../../assets/api";
import { Store } from "../../contexts/auth/AuthContext";

export const Home = () => {
  const { user_id, toggleLoading } = Store();

  const [dailies, setDailies] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("xxx", user_id);

  useEffect(() => {
    const user_id_localS = localStorage.getItem("user_id");

    const getDailies = async () => {
      setLoading(true);
      const { data } = await api.post("/getDailies", {
        user_id: user_id ? user_id : user_id_localS,
      });

      setDailies(data);
      setLoading(false);
    };

    getDailies();
  }, []);

  return (
    <AppContainer>
      {loading && <Loading />}

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
          <span>{`R$ 100,00`}</span>
        </div>
      </Headding>

      <Box>
        <table>
          <tbody>
            {dailies.length ? (
              dailies.map((dailie) => <Row dailie={dailie} key={dailie.id} />)
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
        <Link to={"/newDaily"} className="btn">
          <BsPlusLg size={"1.2rem"} color="#EDEDED" />
        </Link>
      </Buttons>
    </AppContainer>
  );
};
