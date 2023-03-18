import { useState, useContext } from 'react';
import { getRoomBookings } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../../contexts/Auth';
import styled from 'styled-components';

export default function IconComponent(props) {
  const {  setShowBtn, roomClicked, setRoomClicked } = useContext(AuthContext);
  const [ people, setPeople ] = useState(0);
  const [ available, setAvailable ] = useState(true);
  const [ click, setClick ] = useState(false);

  function handleClick(room) {
    setRoomClicked(room);
    setShowBtn(true);
  }

  if(roomClicked == {}) {
    setShowBtn(false);
  }

  let capacityCss = {
    icon1: 'none',
    icon2: 'none',
    icon3: 'none',
    icon4: 'none',
    icon5: 'none',
  };

  if(props.room.capacity >= 1) {
    capacityCss.icon1 = 'inherit';
  }
  if(props.room.capacity >= 2) {
    capacityCss.icon2 = 'inherit';
  }
  if(props.room.capacity >= 3) {
    capacityCss.icon3 = 'inherit';
  }
  if(props.room.capacity >= 4) {
    capacityCss.icon4 = 'inherit';
  }
  if(props.room.capacity >= 5) {
    capacityCss.icon5 = 'inherit';
  }

  const token = useToken();
  getRoomBookings(token, props.room.id).then((res) => {
    setPeople(res.length);
    if(res.length >= props.room.capacity) {
      setAvailable(false);
    }
    else{
      setAvailable(true);
    }
  }).catch((res) => {console.log(res);});

  return(
    <>
      <RoomCard onClick={() => handleClick(props.room)} clicked={ roomClicked.id === props.room.id } available={available}>
        <RoomName>{props.room.name}</RoomName>
        <Icon>
          <ion-icon id="icon1" name={people >= 1 || (roomClicked.id === props.room.id && people < 1) ? 'person' : 'person-outline'} style={{ display: capacityCss.icon1, color: roomClicked.id === props.room.id && people < 1 ? '#FF4791': '' }}/>
          <ion-icon id="icon2" name={people >= 2 || (roomClicked.id === props.room.id && (people > 0 && people < 2)) ? 'person' : 'person-outline'} style={{ display: capacityCss.icon2, color: roomClicked.id === props.room.id && (people > 0 && people < 2) ? '#FF4791': '' }}/>
          <ion-icon id="icon3" name={people >= 3 || (roomClicked.id === props.room.id && (people > 1 && people < 3)) ? 'person' : 'person-outline'} style={{ display: capacityCss.icon3, color: roomClicked.id === props.room.id && (people > 1 && people < 3) ? '#FF4791': '' }}/>
          <ion-icon id="icon4" name={people >= 4 || (roomClicked.id === props.room.id && (people > 2 && people < 4)) ? 'person' : 'person-outline'} style={{ display: capacityCss.icon4, color: roomClicked.id === props.room.id && (people > 2 && people < 4) ? '#FF4791': '' }}/>
          <ion-icon id="icon5" name={people >= 5 || (roomClicked.id === props.room.id && (people > 3 && people < 5)) ? 'person' : 'person-outline'} style={{ display: capacityCss.icon5, color: roomClicked.id === props.room.id && (people > 3 && people < 5) ? '#FF4791': ''  }}/>
        </Icon>
      </RoomCard>
    </>
  );
}

const Icon = styled.div`
  display: flex;
  font-size: 20px;
`;

const RoomName = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

const RoomCard = styled.div`
  min-width: 190px;
  width: 190px;
  height: 45px;
  
  background-color: white;
  
  border: 1px solid #cecece;
  border-radius: 10px;
  
  margin-right: 14px;
  margin-bottom: 10px;

  border: ${(props) => (props.clicked ? 'none' : '1px solid #cecece' )};
  background-color: ${(props) => (props.clicked ? '#FFEED2' : '#EBEBEB')};

  background-color: ${(props) => (props.available ? '' : '#CECECE' )};
  pointer-events: ${(props) => (props.available ? 'all' : 'none' )};

  display: flex;
  align-items: center;

  padding: 0px 11px;

  justify-content: space-between;

  cursor: pointer;
`;
