import React from "react";
import styled from "styled-components";
import { FiDollarSign } from "react-icons/fi";
import { FaDiaspora } from "react-icons/fa";

export const Row = ({ item }) => {
  const { type, date, value } = item;

  return (
    <TableRow className="row" type={type}>
      <td>
        {type == "1" ? (
          <FaDiaspora />
        ) : (
          <FiDollarSign size={"1.4rem"} color="#4E9F3D" />
        )}
      </td>

      <td className="info">
        <p>{type == "1" ? "Diária" : "Pagamento"}</p>
        <span>{date}</span>
      </td>

      <td>
        <span className="value">{`R$  ${value},00`}</span>
      </td>
    </TableRow>
  );
};

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem 0;
  border-bottom: 1px solid ${(props) => (props.type === "1" ? "" : "#4E9F3D")};

  h3 {
    color: #000;
    width: 10%;
    text-align: center;
  }

  .info {
    span,
    p {
      color: ${(props) => (props.type === "1" ? "" : "#4E9F3D")};
    }

    p {
      font-weight: bolder;
      margin-bottom: 2px;
    }

    span {
      font-weight: 100;
    }
  }

  .value {
    font-weight: 600;
    font-size: 1.2rem;
    color: ${(props) => (props.type === "1" ? "" : "#4E9F3D")};
  }

  :last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    .info {
      display: flex;
      padding: 0.8rem;
      font-size: 1.2rem;

      p {
        margin-right: 2.5rem;
      }
    }
  }
`;
