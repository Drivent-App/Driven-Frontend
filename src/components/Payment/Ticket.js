import { AuthContext } from '../../contexts/Auth';
import { useState, useContext, useEffect } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';
import useToken from '../../hooks/useToken';
import { getTickets } from '../../services/paymentApi';

export default function Ticket() {
  const { ticket, setTicket } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const token = useToken();

  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      setCards(res);
    });

    promise.catch((err) => {
      console.log('erro ticket', err.response.data);
    });
  }, [setCards]);

  function handleClick(ticket) {
    setTicket(ticket);
  }

  return (
    <>
      <Subtitle>Primeiro, escolha sua modalidade de Ingresso</Subtitle>
      <Options>
        {cards.map((card) => {
          return (
            <Box key={card.id} onClick={() => handleClick(card)} clicked={ticket.isRemote ? ticket.isRemote === true : ticket.isRemote === false}>
              <h1>{card.name}</h1>
              <h2>R${card.price}</h2>
            </Box>
          );
        })}
      </Options>
    </>
  );
}
