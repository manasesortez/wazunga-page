import React from 'react';
//import AutoType from './AutoType';
import './scss/Top.scss';

const Top = ({ particles }) => {
  const makeParticles = (particles) => {
    let Particles = [];
    for (let particle = 0; particle < particles; particle++) {
      Particles.push(<div key={particle} className="particle" />);
    }
    return Particles;
  }

  return (

    <div className="wrapper__top">
      <div className="content__top">EJEMPLO</div>
      <div className="background__top">
        {makeParticles(particles)}
      </div>
    </div>

  );
}

export default Top;