import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './Routes';
import Hello from './Hello';
import VerifyAnimation from './animation/Verify';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
