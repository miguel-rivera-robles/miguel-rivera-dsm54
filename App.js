/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, View} from 'react-native';
 //navigator Container
 import { NavigationContainer } from '@react-navigation/native';
 //bottomTabNavigator
 import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 //importamos la libreria iconos
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { HomeStack } from './src/navigator/stacks/HomeStack';
 import { CategoriesStack } from './src/navigator/stacks/CategoriesStack';
 import { PostsStack } from './src/navigator/stacks/PostsStack';
 import { InfoStack } from './src/navigator/stacks/InfoStack';
 
 
 const Tab = createBottomTabNavigator();
 
 export default function App(){
   return (
       <NavigationContainer>
         <Tab.Navigator>
           <Tab.Screen name="Inicio" component={HomeStack}
            options={{
             tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name="home" color={'#F32A64'} size={35} />
             ),
           }}
           />
           <Tab.Screen name="Categorias" component={CategoriesStack} 
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="dock-window" color={'#F32A64'} size={35} />
               ),
             }}
           />
           <Tab.Screen name="Post" component={PostsStack}
               options={{
                 tabBarIcon: ({ color, size }) => (
                   <MaterialCommunityIcons name="newspaper" color={'#F32A64'} size={35} />
                 ),
               }}
           />
             <Tab.Screen name="Info" component={InfoStack} 
               options={{
                 tabBarIcon: ({ color, size }) => (
                   <MaterialCommunityIcons name="information" color={'#F32A64'} size={35} />
                 ),
               }}
           />
         </Tab.Navigator>
       </NavigationContainer>
   );
   
 }
  
 
 
   