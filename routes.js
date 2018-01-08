import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './src/components/FormLogin';
import FormRegister from './src/components/FormRegister';

export default props => (
  <Router navigationBarStyle={{ backgroundColor: '#492267' }}>
    <Scene key='root'>
      <Scene key='formLogin' component={FormLogin} title='Login' />
      <Scene key='formRegister' component={FormRegister} title='Register' />
    </Scene>
  </Router>
)