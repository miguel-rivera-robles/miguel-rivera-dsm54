/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import CoinStack from './src/components/coins/CoinStack';
//import { color } from 'react-native-reanimated';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import {View, Text, StyleSheet } from 'react-native';
import Flex from './src/components/Flex';
import Categories from './src/categories/Categories';
import Posts from './src/categories/Posts';

/* Una funcion para que sea nuestro componente de home screen */
function homeScreen() {
  return(
        <Flex />
  )
}


/* Una funcion para que sea nuestro componente de Categories screen */
function categoriesScreen() {
  return(
    
    <Categories />
  )
}


/* Una funcion para que sea nuestro componente de Post screen */
function postsScreen() {
  return(
    <Posts />
  )
}

const Tab=createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#070606',
            labelStyle:{
            fontSize:15
          },
          }}
        >
          <Tab.Screen name="Home" component={homeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={'#6e7c7c'} size={25} />
              ),
            }}
            />
          <Tab.Screen name="Categories" component={categoriesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards-variant" color={'#6e7c7c'} size={25} />
              ),
            }}
          />
          <Tab.Screen name="Posts" component={postsScreen}
             options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bookmark-multiple-outline" color={'#435560'} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    
    </>
   );
};


export default App;
