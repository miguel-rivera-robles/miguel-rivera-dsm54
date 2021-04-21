import * as  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from '../screens/Posts/PostsScreen';


const Stack = createStackNavigator();

export const  PostsStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="POSTS" component={PostsScreen} />
        </Stack.Navigator>
    );
}