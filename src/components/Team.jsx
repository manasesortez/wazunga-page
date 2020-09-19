import React from 'react';
import Member from './Member';
import './Team.css';
import 'bulma/css/bulma.min.css';
import sergioIMG from '../images/sergio.png'
import manasIMG from '../images/manas.png'

const Team = () => {
  let wazungaTeam = [
    {
      name: 'Sergio Bernal',
      position: 'Wazunga Founder',
      about: 'Full-Stack developer, JS-Lover and GNU/Linux enthusiast. Creador del concepto  "Wazunga", una idea que surgió durante mis años universitarios y que poco a poco junto con Alberto, la estamos haciendo posible, siempre con el objetivo de mantenerse actualizado.',
      isFirst: true,
      socials: {
        github: 'https://github.com/nhulox97',
        twitter: 'https://twitter.com/sergio_dosv',
        instagram: 'https://www.instagram.com/sergio_dvlpr/'
      },
      side: 'left',
      img: sergioIMG
    },
    {
      name: 'Alberto Turcios',
      position: 'Wazunga Co-Founder',
      about: 'Full-Stack developer, enthusiast and graphic designer, a creative person, Junto a Sergio surge la idea de crear Wazunga, un concepto que cada día se va haciendo realidad, nuestro interés, es poder innovar y ofrecer un software de calidad "Made in El Salvador".',
      isFirst: false,
      socials: {
        github: 'https://github.com/manasesortez',
        twitter: 'https://twitter.com/Manases61337426',
        instagram: 'https://www.instagram.com/manases.ortez/'
      },
      side: 'right',
      img: manasIMG
    }
  ]

  return (
    <div style={{ backgroundColor: '#363636' }}>
      <div className="columns container__nhulox">
        {
          wazungaTeam.map((member, index) => {
            return (
              <Member
                key={index}
                isFirst={member.isFirst}
                side={member.side}
                name={member.name}
                position={member.position}
                about={member.about}
                img={member.img}
                socials={member.socials}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Team;