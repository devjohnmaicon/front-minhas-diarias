import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { FiDollarSign } from 'react-icons/fi';
import { FaDiaspora } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

import { maskDate } from '../../utils/inputMasks';
import {
  setDailyEdition,
  toggleModal,
} from '../../redux/features/user/sliceUser';
import {
  HStack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';

export const Row = ({ daily }) => {
  const { id, type, value, date } = daily;

  const dispatch = useDispatch();

  const openEdit = () => {
    dispatch(toggleModal(true));

    dispatch(setDailyEdition(daily));
  };

  return (
    <Tr className='row' type={type} onClick={openEdit}>
      <Td px={['10px', '20px']}>
        <Stat>
          <StatLabel fontSize={['1.2rem', '1.5rem']} mb={['2px', '10px']}>
            {type == '1' ? 'Pagamento' : 'Diária'}
          </StatLabel>
          <StatHelpText fontSize={['1rem', '1.2rem']}>{date}</StatHelpText>
        </Stat>
      </Td>

      <Td px={1}>
        <Stat>
          <StatHelpText fontSize={['1rem', '1.5rem']} fontWeight={600}>
            <StatArrow boxSize={["15px", "20px"]} type={type == 1 ? 'decrease' : 'increase'} />
            {`  R$ ${value},00`}
          </StatHelpText>
        </Stat>
      </Td>

      <Td className='arrow' align='center' px={2}>
        <FiEdit size={'1.2rem'} />
      </Td>
    </Tr>
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
    color: ${(props) => (props.type === '1' ? '' : '#7BC74D')};
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
