// Importar libreria react
import React from 'react';

//importar la libreria react stack

import {createStackNavigator} from '@react-navigation/stack';


// importar componente del coin screen

import CoinScreen from './CoinScreen';
// declaracion de constante
const Stack = createStackNavigator();

//declaramos nuestro componente de tipo funcion
const CoinStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Coins" component={CoinScreen}/>
        </Stack.Navigator>
    )
} 

export default CoinStack; 