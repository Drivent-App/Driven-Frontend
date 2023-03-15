import styled from 'styled-components';
import MainAuditorium from './Alditory/principal';
import SideAuditorium from './Alditory/side';
import WorkshopRoom from './Alditory/workshop';

export default function ActivitiesComponent() {
  return(
    <>
      <All>
        <MainAuditorium/>
        <SideAuditorium/>
        <WorkshopRoom/>
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
