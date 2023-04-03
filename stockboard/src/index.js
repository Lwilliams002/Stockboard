import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.render(<App />, document.getElementById('root'));

// eslint-disable-next-line
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);