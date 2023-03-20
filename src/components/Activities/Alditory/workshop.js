import { Auditory, Element, Left, Rigth, All } from '../../../style/activetiesStyle';
import enter from '../../../assets/images/enter.png';
import out from '../../../assets/images/outlined.png';
import check from '../../../assets/images/check.png';
import { AuthContext } from '../../../contexts/Auth';
import { useContext } from 'react';
import { postActivity } from '../../../services/activitiesApi';
import useToken from '../../../hooks/useToken';

export default function WorkshopRoom({ userActivities, setUserActivities }) {
  const { filteredActivities } = useContext(AuthContext);
  const token = useToken();

  let local = filteredActivities.filter((el) => el.local === 'Sala de Workshop');

  function registerActivity(id) {
    postActivity(token, id)
      .then(() => {
        setUserActivities([]);
      })
      .catch((error) => alert(error.message));
  }

  if (!userActivities) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Auditory>
        <h1>Sala de Workshop</h1>
        <All>
          {local ? (
            local.map((l) => (
              <Element
                key={l.id}
                time={parseInt(l.timeEnd) - parseInt(l.timeStart) === 1 ? 1 : 2}
                green={userActivities.includes(l.id)}
              >
                <Left>
                  <h2>{l.lectureName}</h2>
                  <h3>
                    {l.timeStart} - {l.timeEnd}
                  </h3>
                </Left>
                <hr />
                <Rigth red={l.numberVacancies === 0}>
                  {userActivities.includes(l.id) ? (
                    <>
                      <img src={''} alt="Inscrito" />
                      <h2>Inscrito</h2>
                    </>
                  ) : l.numberVacancies > 0 ? (
                    <>
                      <img src={enter} alt="Vaga disponível" onClick={() => registerActivity(l.id)} />
                      <h2>
                        {l.numberVacancies} {l.numberVacancies === 1 ? 'vaga' : 'vagas'}
                      </h2>
                    </>
                  ) : (
                    <>
                      <img src={out} alt="Vaga indisponível" />
                      <h2>Esgotado</h2>
                    </>
                  )}
                </Rigth>
              </Element>
            ))
          ) : (
            <h1>Sem palestras</h1>
          )}
        </All>
      </Auditory>
    </>
  );
}
