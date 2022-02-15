import React from "react";
import { Row } from "./Row";
import { AppContainer, Box, Buttons, Headding, Rows } from "./styleHome";
import { BsPlusLg } from "react-icons/bs";

const mock = [
  {
    paid_out: true,
    type: "Diária",
    date: "14/12/1996",
    value: "70,00",
  },
  {
    paid_out: false,
    type: "Pagamento",
    date: "05/12/2000",
    value: "100,00",
  },
  {
    paid_out: true,
    type: "Diária",
    date: "04/07/2022",
    value: "70,00",
  },
  {
    paid_out: false,
    type: "Pagamento",
    date: "05/12/2000",
    value: "100,00",
  },
  {
    paid_out: true,
    type: "Diária",
    date: "04/07/2022",
    value: "70,00",
  },
  {
    paid_out: true,
    type: "Diária",
    date: "04/07/2022",
    value: "70,00",
  },
  {
    paid_out: true,
    type: "Diária",
    date: "04/07/2022",
    value: "70,00",
  },
  {
    paid_out: true,
    type: "Diária",
    date: "04/07/2022",
    value: "70,00",
  },
];

export const Home = () => {
  return (
    <AppContainer>
      <Headding>
        <h3>Valor da divida</h3>
        <div className="box-heading">
          <sub>R$</sub>
          <span>1.000,00</span>
        </div>
      </Headding>

      <Box>
        <table>
          <tbody>
            {mock.map((item, index) => (
              <Row key={index} item={item} />
            ))}
          </tbody>
        </table>
      </Box>
      <Buttons>
        <button>
          <BsPlusLg size={"1.2rem"} />
        </button>
      </Buttons>
    </AppContainer>
  );
};
