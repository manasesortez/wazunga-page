import React from 'react';
import Typewritter from 'typewriter-effect'

const AutoType = ({ words }) => (
  <Typewritter
    options={{
      strings: words,
      autoStart: true,
      loop: true,
    }}
  />
);

export default AutoType;