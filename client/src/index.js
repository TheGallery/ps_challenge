import React from 'react';
import ReactDOM from 'react-dom';
// Global CSS could be put in <App /> but I prefer putting them in the root file
import { css } from 'glamor';
import 'glamor/reset';

import App from './components/App';

css.global('body', {
  minHeight: '100vh',
  height: '100%',
  backgroundImage: 'linear-gradient(to top, #37ecba 0%, #72afd3 100%)',
  fontFamily: 'Poppins, sans-serif'
});

ReactDOM.render(<App />, document.getElementById('root'));
