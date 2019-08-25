import React from 'react';
import ReactDOM from 'react-dom';

export default class App {
  init() {
    ReactDOM.render(
      <strong>Hey!</strong>,
      document.getElementById('app')
    );
  }
}

var app = new App();
app.init();