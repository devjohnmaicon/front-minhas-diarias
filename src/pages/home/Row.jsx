import React from "react";
import styled from "styled-components";
import { FiDollarSign } from "react-icons/fi";
import { FaDiaspora } from "react-icons/fa";

export const Row = ({ item }) => {
  const { paid_out, type, date, value } = item;

  const paiment = paid_out ? `R$ ${value}` : `R$ ${value}`;

  return (
    <TableRow className="row" paid_out={paid_out}>
      <td>
        {paid_out ? (
          <FaDiaspora />
        ) : (
          <FiDollarSign size={"1.4rem"} color="#4E9F3D" />
        )}
      </td>

      <td className="info">
        <p>{type}</p>
        <span>{date}</span>
      </td>

      <td>
        <span className="value">{paiment}</span>
      </td>
    </TableRow>
  );
};

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem 0;
  border-bottom: 1px solid ${(props) => (props.paid_out ? "" : "#4E9F3D")};

  h3 {
    color: #000;
    width: 10%;
    text-align: center;
  }

  .info {
    span,
    p {
      color: #000;
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
    color: ${(props) => (props.paid_out ? "" : "#4E9F3D")};
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
