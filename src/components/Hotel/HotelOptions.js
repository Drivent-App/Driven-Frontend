import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { getHotelsWithRooms, getRoomBookings } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { Box, Image, DivDesc, Name, Desc, DescValue } from '../Auth';
import { toast } from 'react-toastify';

export default function HotelOptions(props) {
  const token = useToken();
  const { hotel, setHotel, setShowRooms, setHotelWRoom, setShowBtn } = useContext(AuthContext);
  const [capacity, setCapacity] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [booking, setBooking] = useState(null);
  const [ roomName, setRoomName ] = useState('');
  let teste = 0;
  let teste2 = 0;
  let nome = [];

  useEffect(() => {
    getHotelsWithRooms(token, props.hotel.id).then((res) => {
      setRooms(res.Rooms);
    });
  }, []);

  useEffect(() => {
    rooms.map((room) => {
      teste += room.capacity;
      if(room.capacity >= 1 && !nome.includes('Single')) {
        nome.push('Single');
      }
      if(room.capacity >= 2 && !nome.includes('Double')) {
        nome.push('Double');
      }
      if(room.capacity >= 3 && !nome.includes('Triple')) {
        nome.push('Triple');
      }
      if(room.capacity >= 4 && !nome.includes('Quadruple')) {
        nome.push('Quadruple');
      }
      if(room.capacity >= 5 && !nome.includes('Quintuple')) {
        nome.push('Quintuple');
      }
      return teste;
    });
    rooms.map((room) => {
      getRoomBookings(token, room.id).then((response) => {
        teste2 += response.length;
        setBooking(teste2);
      });
      return booking;
    });
    setRoomName(nome.join(', '));
    setCapacity(teste);
  }, [rooms]);

  function handleClick() {
    setHotel(props.hotel);
    setShowBtn(false);
    setShowRooms(true);
    getHotelsWithRooms(token, props.hotel.id)
      .then((res) => {
        setHotelWRoom(res.Rooms); 
      })
      .catch((res) => { 
        toast(res); 
      });
  }
  return (
    <>
      {rooms.length === 0 ? 'carregando' : 
        <Box onClick={() => handleClick(props.hotel)} clicked={ props.hotel.id === hotel.id }>
          <Image src={props.image} />
          <DivDesc>
            <Name>{props.name}</Name>
            <Desc>Tipos de acomodação:</Desc>
            <DescValue>{roomName}</DescValue>
            <Desc>Vagas disponíveis</Desc>
            <DescValue>{capacity-booking}</DescValue>
          </DivDesc>
        </Box>
      }
    </>
  );
}
