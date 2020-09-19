import React from 'react';
import AutoType from './AutoType';
import './scss/ParticlesAnimation.scss';

const ParticlesAnimation = ({ particles }) => {
  const makeParticles = (particles) => {
    let Particles = [];
    for (let particle = 0; particle < particles; particle++) {
      Particles.push(<div key={particle} className="c" />);
    }

    return Particles;
  }
  
  return (
    <div className="columns is-vcentered">
      <div className="column"
        style={{ backgroundColor: '#242424' }}>
        <div className="particles__container">
          <div className="wrap">
            {makeParticles(particles)}
          </div>
        </div>
      </div >
    </div >
  );
}

export default ParticlesAnimation;