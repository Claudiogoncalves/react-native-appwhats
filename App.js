import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {  
  StyleSheet  
} from 'react-native';

import Routes from './routes';
import reducers from './src/reducers';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>     
        <Routes />  
      </Provider> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
