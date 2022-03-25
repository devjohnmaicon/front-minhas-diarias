import React from "react";
import styled from "styled-components";
import { FiDollarSign } from "react-icons/fi";
import { FaDiaspora } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { maskDate } from "../../utils/inputMasks";
import { useNavigate } from "react-router-dom";
import {
  handleEdition,
  openEdition,
  setDailyEdition,
  toggleModal,
} from "../../redux/features/dailies";
import { useDispatch } from "react-redux";

export const Row = ({ daily }) => {
  const { id, type, value, date } = daily;

  const dispatch = useDispatch();

  const openEdit = () => {
    dispatch(toggleModal(true));

    dispatch(setDailyEdition(daily));
  };

  return (
    <TableRow className="row" type={type} onClick={openEdit}>
      <td className="icon" align="center">
        {type == "1" ? (
          <FaDiaspora size={"1.4rem"} />
        ) : (
          <FiDollarSign size={"1.5rem"} />
        )}
      </td>

      <td className="info" align="left">
        <p>{type == "1" ? "Diária" : "Pagamento"}</p>
        {/* <span>{maskDate(date)}</span> */}
      </td>

      <td>
        <span className="value">
          {`${type == 2 ? "-" : "+"} R$ ${value},00`}
        </span>
      </td>

      <td className="arrow" align="center">
        <MdOutlineKeyboardArrowDown size={"1.2rem"} />
      </td>
    </TableRow>
  );
};

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem 0;

  h3 {
    color: #000;
    width: 10%;
    text-align: center;
  }

  :first-child {
    filter: brightness(1);
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

    p {
      color: #eeeeee;
      font-weight: 600;
      margin-bottom: 0.2rem;
      padding-bottom: 0.4rem;
    }

    span {
      font-weight: 300;
      color: #b2b1b9;
    }
  }

  .value {
    flex: 1;

    font-weight: 600;
    font-size: 1.2rem;
    color: ${(props) => (props.type === "1" ? "" : "#7BC74D")};
  }

  .arrow {
    cursor: pointer;
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
