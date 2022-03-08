import React from "react";
import styled from "styled-components";
import { FiDollarSign } from "react-icons/fi";
import { FaDiaspora } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { maskDate } from "../../utils/inputMasks";
import { Store } from "../../contexts/GlobalContext";

export const Row = ({ dailie }) => {
  const { toggleModal } = Store();
  const { type, value, date } = dailie;

  const handleEdition = () => {};

  return (
    <TableRow className="row" type={type}>
      <td className="icon" align="center">
        {type == "1" ? (
          <FaDiaspora />
        ) : (
          <FiDollarSign size={"1.4rem"} color="#4E9F3D" />
        )}
      </td>

      <td className="info" align="center">
        <span>{maskDate(date)}</span>
        <p>{type == "1" ? "Diária" : "Pagamento"}</p>
      </td>

      <td>
        <span className="value">{`R$ ${value},00`}</span>
      </td>

      <td className="arrow" align="center" onClick={handleEdition}>
        <button>
          <MdOutlineKeyboardArrowDown size={"1.2rem"} />
        </button>
      </td>
    </TableRow>
  );
};

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem 0;
  border-bottom: 1px solid none;

  h3 {
    color: #000;
    width: 10%;
    text-align: center;
  }

  :first-child {
    filter: brightness(1);
    border-bottom: 1px solid ${(props) => (props.type === "1" ? "" : "#4E9F3D")};
    margin: 0.4rem 0;
  }

  filter: brightness(0.5);

  :last-child {
    border-bottom: none;
  }

  .icon {
    flex: 1;
  }

  .info {
    flex: 3;

    span,
    p {
      color: ${(props) => (props.type === "1" ? "" : "#4E9F3D")};
    }

    span {
      font-weight: 100;
    }

    p {
      margin-top: 0.2rem;
      font-weight: bolder;
    }
  }

  .value {
    flex: 1;

    font-weight: 600;
    font-size: 1.2rem;
    color: ${(props) => (props.type === "1" ? "" : "#4E9F3D")};
  }

  .arrow {
    flex: 1;

    button {
      background-color: transparent;
    }
  }

  @media screen and (min-width: 768px) {
    .info {
      display: flex;
      align-items: center;
      padding: 0.8rem;
      font-size: 1.2rem;

      span {
        margin-right: 2.5rem;
      }

      p {
        width: 100%;
      }
    }
  }
`;
