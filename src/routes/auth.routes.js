import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import LastTaf from '../pages/LastTaf';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </AuthStack.Navigator>
);

export default AuthRoutes;