import { Subtitle } from '../../style/paymentStyle.js';
import styled from 'styled-components';
import ActivitiesComponent from './Activities.js';
import { useEffect, useState } from 'react';
import useActivities from '../../hooks/api/useActivities.js';
import useActivitiesByDay from '../../hooks/api/useActivitiesByDay.js';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
export default function FilterDaysComponent({ dayEvent, setDayEvent }) {
  const [allActivities, setAllActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const { activities } = useActivities();
  const { getActivitiesByDay } = useActivitiesByDay();
  useEffect(() => {
    if (activities) {
      setAllActivities(activities);
    }
  }, [activities]);
  if (!activities) {
    return <></>;
  }
  const dayActivity = [];
  const transformedDay = [];
  allActivities.map((element) => {
    const day = new Date(element.day);
    const finalDay = dayjs(day).locale('pt-br').format('ddd, DD/MM');
    if (!transformedDay.includes(finalDay)) {
      console.log(day);
      dayActivity.push(element.day);
      transformedDay.push(finalDay);
    }
  });

  async function activitesByDay(day, dayActivity) {
    setDayEvent(day);
    try {
      const activities = await getActivitiesByDay(dayActivity);
      setFilteredActivities(activities);
    } catch (error) {
      console.log(error.response.data);
    }
  }
  console.log(filteredActivities);
  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento</Subtitle>
      <Days>
        {transformedDay.map((element, index) => {
          return (
            <Day
              key={index}
              onClick={() => activitesByDay(element, dayActivity[index])}
              dayEvent={dayEvent === element}
            >
              {element}
            </Day>
          );
        })}
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
  background-color: ${(props) => (props.dayEvent ? '#FFD37D' : '#e0e0e0e0')};
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
