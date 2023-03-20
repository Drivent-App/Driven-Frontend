import styled from 'styled-components';
import MainAuditorium from './Alditory/principal';
import SideAuditorium from './Alditory/side';
import WorkshopRoom from './Alditory/workshop';
import useToken from '../../hooks/useToken';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ActivitiesComponent() {
  const token = useToken();
  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    const promise = axios.get('http://localhost:4000/userActivities', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    promise.then((res) => {
      setUserActivities(res.data);
    });
  }, [userActivities]);

  return(
    <>
      <All>
        <MainAuditorium userActivities={userActivities} setUserActivities={setUserActivities}/>
        <SideAuditorium userActivities={userActivities} setUserActivities={setUserActivities}/>
        <WorkshopRoom userActivities={userActivities} setUserActivities={setUserActivities}/>
      </All>
    </>
  );
}

const All = styled.div`
    display: flex;
    margin-top: 50px;
    hr{
        border: 1px solid #D7D7D7;
        margin: 9px;
    }
`;
