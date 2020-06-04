import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
=======
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
>>>>>>> a66c7edadaace43d68018dcfc0916e1643437f80

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();