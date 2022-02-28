import React, { useContext, useEffect, useState } from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";
import { Modal } from "../../components/Modal";
import { ContextState, Store } from "../../contexts/GlobalContext";

const mock = [
  {
    type: "Diária",
    date: "14/12/1996",
    value: 10.0,
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    type: "Pagamento",
    date: "05/12/2000",
    value: 100.0,
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
  {
    type: "Diária",
    date: "04/07/2022",
    value: 20.0,
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  },
];

export const Home = () => {
  const [dailies, setDailies] = useState(mock);
  const [debt, setDebt] = useState(0);

  const { state, dispatch, toggleModal } = Store();

  const addDaily = (newDaily) => {
    setDailies([...dailies, newDaily]);
  };

  useEffect(() => {
    function calcDebt() {
      const calc = dailies
        .map((daily) => daily.value)
        .reduce((prev, current) => prev + current);

      setDebt(calc);
    }

    calcDebt();
  }, [dailies]);

  return (
    <AppContainer>
      <Headding>
        <h3>Valor da divida</h3>
        <div className="box-heading">
          <sub>R$</sub>
          <span>{debt}</span>
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
