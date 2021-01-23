/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CoinStack from './src/components/coins/CoinStack';
import {NavigationContainer} from '@react-navigation/native';



const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
      <CoinStack />
      
      </NavigationContainer>
    
    </>
   );
};


export default App;
