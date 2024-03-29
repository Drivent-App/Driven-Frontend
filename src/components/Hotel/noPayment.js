import { Text } from '../../style/paymentStyle';
import useToken from '../../hooks/useToken';
import { useEffect, useState } from 'react';
import HotelComponent from '.';
import { getHotelInformation } from '../../services/paymentApi';

export default function NoPayment() {
  const token = useToken();
  const [paid, setPaid] = useState();

  useEffect(() => {
    const promise = getHotelInformation(token);

    promise.then((res) => {
      console.log(res);
      setPaid(res.status);
    });

    promise.catch((err) => {
      alert('erro', err.response.data);
    });
  }, []);

  return (
    <>
      {paid === 'PAID'
        ?
        <HotelComponent />
        :
        <Text>
          Você precisa ter confirmado pagamento antes
          <br />
          de fazer a escolha de hospedagem
        </Text>
      }
    </>
  );
}
