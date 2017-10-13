import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Provider } from 'react-redux';

import store from '../../redux/store';

import Compose from '../Compose';
import Posts from '../Posts';

const Root = glamorous.div({
  minHeight: '100vh',
  height: '100%',
  width: '600px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media only screen and (max-width: 600px)': {
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 20px'
  }
});

// While <App /> could be a functional component in this particular case,
// we'd normaly have state handling and since it's our top level component
// it makes sense to write it as a container instead.
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Root>
          <Compose />
          <Posts />
        </Root>
      </Provider>
    )
  }
}

export default App;
