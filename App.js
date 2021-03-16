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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
//import Icon from 'react-native-vector-icons/FontAwesome';
/* Una funcion para que sea nuestro componente de home screen */

function homeScreen() {
  return(
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor: '#F9278D'}}>
      <Text>Screen de Inicio</Text>
    </View>
  )
}
/* Una funcion para que sea nuestro componente de home screen */

function categoriesScreen() {
  return(
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor:'#9D30F7'}}>
      <Text>Screen de Categorias</Text>
    </View>
  )
}
function postsScreen() {
  return(
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', backgroundColor:'#78CFB4'}}>
      <Text>Screen de Posts</Text>
    </View>
  )
}

const Tab=createBottomTabNavigator();
//const myIcon = <Icon name="rocket" size={30} color="#900" />;
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
          <Tab.Screen name="Home" component={homeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={'#F32A64'} size={25} />
              ),
            }}
            />
          <Tab.Screen name="Categories" component={categoriesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards-variant" color={'#F32A64'} size={25} />
              ),
            }}
          />
          <Tab.Screen name="Posts" component={postsScreen}
             options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bookmark-multiple-outline" color={'#F32A64'} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    
    </>
   );
};


export default App;
