import styled from 'styled-components';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import NoHotel from '../../../components/Hotel/noHotel';
import useToken from '../../../hooks/useToken';
import { getTickets } from '../../../services/paymentApi';

export default function Hotel() { 
  const { setTicketType } = useContext(AuthContext);
  const token = useToken();

  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      setTicketType(res);
    });

    promise.catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <NoHotel />
    </>
  );
}

const Title = styled.h1`
  font-size: 34px;
  font-weight: 400;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 37px;
`;
