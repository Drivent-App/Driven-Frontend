import { Subtitle } from '../../style/paymentStyle.js';
import styled from 'styled-components';
import ActivitiesComponent from './Activities.js';

export default function FilterDaysComponent({ dayEvent, setDayEvent }) {
  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento</Subtitle>
      <Days>
        <Day onClick={() => setDayEvent(!dayEvent)}>dia 1</Day>
        <Day onClick={() => setDayEvent(!dayEvent)}>dia 2</Day>
        <Day onClick={() => setDayEvent(!dayEvent)}>dia 3</Day>
      </Days>
      {dayEvent && <ActivitiesComponent />}
    </>
  );
}

const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Day = styled.button`
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
