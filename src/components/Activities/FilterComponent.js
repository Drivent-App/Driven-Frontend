import { Subtitle } from '../../style/paymentStyle.js';
import styled from 'styled-components';

export default function FilterDaysComponent() {
  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento</Subtitle>
      <Days>
        <Day>dia 1</Day>
        <Day>dia 2</Day>
        <Day>dia 3</Day>
      </Days>
    </>
  );
}

const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Day = styled.div`
  height: 37px;
  width: 131px;
  background-color: #e0e0e0e0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 17px;
  :hover {
    cursor: pointer;
  }
`;
