import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
document.addEventListener("DOMContentLoaded", function(event) {
    /* global alt */
    if ('alt' in window) {
        alt.emit('View.init')
    }
})