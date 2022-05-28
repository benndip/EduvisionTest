import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, Login, Signup, Onboarding, Three } from '../screens'

import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Three" component={Three} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator
