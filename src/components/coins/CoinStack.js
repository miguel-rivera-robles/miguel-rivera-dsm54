// Importar libreria react
import React from 'react';

//importar la libreria react stack

import {createStackNavigator} from '@react-navigation/stack';


// importar componente del coin screen

import CoinScreen from './CoinScreen';
// declaracion de constante
const Stack = createStackNavigator();

import CoinDetailScreen from './CoinDetailScreen';


//declaramos nuestro componente de tipo funcion
const CoinStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="stack"  
            component={CoinScreen}
            />
                        {/* //importamos el sstack de la pantalla de detalle*/}   
         <Stack.Screen 
            name="CoinDetailScreen"  
            component={CoinDetailScreen}
            />

        </Stack.Navigator>
    )
} 

export default CoinStack; 