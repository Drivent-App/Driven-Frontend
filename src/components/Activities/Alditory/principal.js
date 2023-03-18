import { Auditory, Element, Left, Rigth, All } from '../../../style/activetiesStyle';
/* import enter from '../../../assets/images/enter.png';
import out from '../../../assets/images/outlined.png'; */
import { AuthContext } from '../../../contexts/Auth';
import { useContext } from 'react';

export default function MainAuditorium() {
  const { filteredActivities } = useContext(AuthContext);

  let auditorioPrincipal = filteredActivities.find((el) => el.local === 'Auditório Principal');
  console.log('teste', auditorioPrincipal);
  if (!auditorioPrincipal) {
    console.log('não tem');
  } else {
    console.log('tem', auditorioPrincipal.day);
  }
  return (
    <>
      <Auditory>
        <h1>Auditório Principal</h1>
        {/* <All>
          <Element>
            <Left>
              {
                auditorioPrincipal.length > 0 ?
                  <h2>Minecraft: montando o PC ideal</h2>
                  :
                  <h3>09:00 - 10:00</h3>
              }
            </Left>
          </Element>
        </All> */}
        {/*  <All>
          <Element>
            <Left>
              <h2>Minecraft: montando o PC ideal</h2>
              <h3>09:00 - 10:00</h3>
            </Left>
            <hr />
            <Rigth>
              <img src={enter} />
              <h2>27 vagas</h2>
            </Rigth>
          </Element>
          <Element>
            <Left>
              <h2>LoL: montando o PC ideal</h2>
              <h3>10:00 - 11:00</h3>
            </Left>
            <hr />
            <Rigth>
              <img src={out} />
              <h3>Esgotado</h3>
            </Rigth>
          </Element>
        </All> */}
      </Auditory>
    </>
  );
}
