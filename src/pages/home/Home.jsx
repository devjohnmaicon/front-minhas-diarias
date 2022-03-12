import React, { useEffect } from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";

import { Link } from "react-router-dom";
import { StoreDailies } from "../../contexts/Dailies/DailiesContext";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const {
    state: { debit, dailies },
    dispatch,
    getData,
  } = StoreDailies();

  console.log("dailies", dailies);

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContainer>
      <Headding>
        <h3>Valor da divida</h3>
        <div className="box-heading">
          <sub>R$</sub>
          <span>{`${debit},00`}</span>
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
