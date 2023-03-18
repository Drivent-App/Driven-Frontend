import { Auditory, Element2, Left, Rigth, All } from '../../../style/activetiesStyle';
import enter from '../../../assets/images/enter.png';
/* import out from '../../../assets/images/outlined.png'; */
import { AuthContext } from '../../../contexts/Auth';
import { useContext } from 'react';

export default function SideAuditorium() {
  const { filteredActivities } = useContext(AuthContext);

  let local = filteredActivities.filter((el) => el.local === 'Auditório Lateral');

  return(
    <>
      <Auditory>
        <h1>Auditório Lateral</h1>
        <All>
          {
            local
              ?
              local.map((l) =>
                <Element2 key={l.id}>
                  <Left>
                    <h2>{l.lectureName}</h2>
                    <h3>{l.timeStart}</h3>
                  </Left>
                  <hr />
                  <Rigth>
                    <img src={enter} /* alterar aqui *//>
                    <h2>{l.numberVacancies} {l.numberVacancies === 1 ? 'vaga' : 'vagas'}</h2>
                  </Rigth>
                </Element2>
              )
              :
              <h1>Sem palestras</h1>
          }
        </All>
      </Auditory>
    </>
  );
}
