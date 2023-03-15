import { Auditory, Element, Left, Rigth, All } from '../../../style/activetiesStyle';
import enter from '../../../assets/images/enter.png';
import out from '../../../assets/images/outlined.png';

export default function WorkshopRoom() {
  return(
    <>
      <Auditory>
        <h1>Sala de Workshop</h1>
        <All>
          <Element>
            <Left>
              <h2>Palestra y</h2>
              <h3>09:00 - 11:00</h3>
            </Left>
            <hr/>
            <Rigth>
              <img src={enter}/>
              <h2>27 vagas</h2>
            </Rigth>
          </Element>
          <Element>
            <Left>
              <h2>Palestra z</h2>
              <h3>09:00 - 11:00</h3>
            </Left>
            <hr/>
            <Rigth>
              <img src={out}/>
              <h3>Esgotado</h3>
            </Rigth>
          </Element>
        </All>
      </Auditory>
    </>
  );
}
