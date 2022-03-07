import React, { useEffect, useState } from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";
import { Modal } from "../../components/Modal";
import { Store } from "../../contexts/GlobalContext";
import { mock } from "../../utils/db";
import { api } from "../../assets/api";
import { toast } from "react-toastify";

export const Home = () => {
  const [dailies, setDailies] = useState([]);
  console.log("dailies", dailies);

  const { state, dispatch, toggleModal } = Store();

  const addDaily = async (daily) => {
    console.log("add daily", daily);

    try {
      const { data } = await api.post("/createDaily", daily);

      setDailies([data, ...dailies]);

      toast.success("Salvo com Sucesso !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get("/getDailies");

      const filteredData = data.filter(
        (daily) => daily.user_id === "b24c471e-47cb-49a2-9ffa-aac10ce9fdb6"
      );

      setDailies(filteredData);
    };

    getData();
  }, []);

  return (
    <AppContainer>
      <Headding>
        <h3>Valor da divida</h3>
        <div className="box-heading">
          <sub>R$</sub>
          {/* <span>{`${debit},00`}</span> */}
          <span>500</span>
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
        <button onClick={toggleModal}>
          <BsPlusLg size={"1.2rem"} color="#EDEDED" />
        </button>
      </Buttons>

      {state.modal && <Modal addDaily={addDaily} />}
    </AppContainer>
  );
};
