import React, { useEffect, useState } from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";
import { Modal } from "../../components/Modal";
import { Store } from "../../contexts/GlobalContext";
import { mock } from "../../utils/db";

export const Home = () => {
  const [dailies, setDailies] = useState(mock);
  const [debit, setDebit] = useState(0);

  const { state, dispatch, toggleModal } = Store();

  const addDaily = (daily) => {
    console.log("daily", daily);
    setDailies([...dailies, daily]);
  };

  useEffect(() => {
    const getValueTotal = () => {
      const valueTotal = dailies
        .map((daily) => daily.value)
        .reduce((prev, current) => prev + current);

      console.log("valueTotal", valueTotal);

      setDebit(valueTotal);
    };
    getValueTotal();
  }, [dailies]);

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
            {dailies.map((item, index) => (
              <Row key={index} item={item} />
            ))}
          </tbody>
        </table>
      </Box>

      <Buttons>
        <button onClick={toggleModal}>
          <BsPlusLg size={"1.2rem"} />
        </button>
      </Buttons>

      {state.modal && <Modal addDaily={addDaily} />}
    </AppContainer>
  );
};
