import React from 'react';
import AutoType from './AutoType';
import wazungaImg from '../images/wazunga-transparent.png'
import './Welcome.css'

const Welcome = () => {
  let words = ['We are Wazunga.', 'We build cool things.', 'We are a community.', 'We try to change the world.', 'We want to make a difference.', 'We are more than developers.'];

  return (
    <div className="welcome__container">
      <div className="columns is-vcentered">
        <div className="column is-6-desktop is-6-tablet is-12-mobile">
          <div className="welcome__img__container">
            <div className="welcome__img welcome__centered">
              <img
                src={wazungaImg}
                alt="wazunga-transparent"
                className="welcome__content"
              />
            </div>
          </div>
        </div>
        <div className="column is-6-desktop is-6-tablet is-12-mobile">
          <div className="welcome__font welcome__centered">
            <AutoType words={words} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;