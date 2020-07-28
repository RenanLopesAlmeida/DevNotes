import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from './stacks/MainStack';

import {store, persistor} from './store';

const App = () => (
  <>
    <StatusBar backgroundColor="#222" />

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </>
);

export default App;
console.disableYellowBox = true;
