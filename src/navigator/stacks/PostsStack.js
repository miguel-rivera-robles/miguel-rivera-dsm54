import * as  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from '../screens/Posts/PostsScreen';


const Stack = createStackNavigator();

export const  PostsStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Posts" component={PostsScreen} />
        </Stack.Navigator>
    );
}