import { Auditory, Element, Left, Rigth, All } from '../../../style/activetiesStyle';
import enter from '../../../assets/images/enter.png';
/* import out from '../../../assets/images/outlined.png'; */
import { AuthContext } from '../../../contexts/Auth';
import { useContext } from 'react';

export default function WorkshopRoom() {
  const { filteredActivities } = useContext(AuthContext);

  let local = filteredActivities.filter((el) => el.local === 'Sala de Workshop');
  return(
    <>
      <Auditory>
        <h1>Sala de Workshop</h1>
        <All>
          {
            local
              ?
              local.map((l) =>
                <Element 
                  key={l.id}
                  time={parseInt(l.timeEnd)- parseInt(l.timeStart)  ===  1 ? 1 : 2}
                >
                  <Left>
                    <h2>{l.lectureName}</h2>
                    <h3>{l.timeStart} - {l.timeEnd}</h3>
                  </Left>
                  <hr />
                  <Rigth>
                    <img src={enter} alt="Vaga disponível" /* alterar aqui *//>
                    <h2>{l.numberVacancies} {l.numberVacancies === 1 ? 'vaga' : 'vagas'}</h2>
                  </Rigth>
                </Element>
              )
              :
              <h1>Sem palestras</h1>
          }
        </All>
      </Auditory>
    </>
  );
}
