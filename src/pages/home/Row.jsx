import React from "react";
import styled from "styled-components";
import { FiDollarSign } from "react-icons/fi";
import { FaDiaspora } from "react-icons/fa";

export const Row = ({ data }) => {
  const { paid_out, type, date, value } = data;

  const paiment = paid_out ? `R$ ${value}` : `- R$ ${value}`;

  return (
    <RowComponent className="row" paid_out={paid_out}>
      <h3>
        {paid_out ? (
          <FaDiaspora />
        ) : (
          <FiDollarSign size={"1.8rem"} color="#4E9F3D" />
        )}
      </h3>
      <div className="info">
        <p>{type}</p>
        <span>{date}</span>
      </div>
      <span>{paiment}</span>
    </RowComponent>
  );
};

const RowComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem 0;
  border-bottom: 1px solid #000;

  h3 {
    color: #000;
    width: 10%;
    text-align: center;
  }

  .info {
    width: 40%;

    span,
    p {
      color: #000;
    }

    p {
      font-size: 1.4rem;
    }

    span {
      font-size: 1rem;
      font-weight: 100;
      padding: 1rem 0;
    }
  }

  span {
    font-weight: 600;
    font-size: 1.2rem;
    color: ${(props) => (props.paid_out ? "" : "#4E9F3D")};
  }

  :last-child {
    border-bottom: none;
  }
`;
