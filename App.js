 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { HomeStack } from './src/navigator/stacks/HomeStack';
 import { CategoriesStack } from './src/navigator/stacks/CategoriesStack';
 import { PostsStack } from './src/navigator/stacks/PostsStack';
 
 
 
 const Tab = createBottomTabNavigator();
 
 export default function App(){
   return (
       <NavigationContainer>
         <Tab.Navigator>
           <Tab.Screen name="Home" component={HomeStack}
            options={{
             tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name="home" color={'#171513'} size={35} />
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
         </Tab.Navigator>
       </NavigationContainer>
   );
   
 }
 