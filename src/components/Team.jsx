import React from 'react';
import Member from './Member';
import './Team.css';
import 'bulma/css/bulma.min.css';
import sergioIMG from '../images/sergio.png'
import manasIMG from '../images/manas.png'

const Team = () => {
  let about = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, corrupti, aliquid laudantium ullam perferendis nesciunt placeat, numquam facere dignissimos quos hic voluptatibus at.Eaque esse nesciunt inventore placeat, praesentium maiores ? '

  let name = 'Nombre del integrante'

  return (
    <div style={{ backgroundColor: '#363636' }}>
      <div class="columns container__nhulox">

        <Member isFirst={true} about={about} name={'Sergio A. Bernal'} side='left'
          img={sergioIMG} position='Wazunga Founder' />
        <Member isFirst={false} about={about} name={'Alberto M. Turcios'} side='right'
          img={manasIMG} position='Wazunga Co-Founder' />
      </div>
    </div>
  )
}

export default Team;