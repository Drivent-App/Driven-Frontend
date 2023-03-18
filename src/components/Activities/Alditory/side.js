import { Auditory, Element2, Left, Rigth, All } from '../../../style/activetiesStyle';
import enter from '../../../assets/images/enter.png';

export default function SideAuditorium() {
  return(
    <>
      <Auditory>
        <h1>Auditório Lateral</h1>
        <All>
          <Element2>
            <Left>
              <h2>Palestra x</h2>
              <h3>09:00 - 11:00</h3>
            </Left>
            <hr/>
            <Rigth>
              <img src={enter} alt="Ainda com vagas"/>
              <h2>27 vagas</h2>
            </Rigth>
          </Element2>
        </All>
      </Auditory>
    </>
  );
}
