import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Results from '../pages/Results';
import PhysicalAtivity from '../pages/PhysicalAtivity';
import FinishPhysicalAtivity from '../pages/FinishPhysicalAtivity';
import Heating from '../pages/Heating';

const RunStack = createStackNavigator();

function RoutesRun() {
    return (
        <RunStack.Navigator initialRouteName="Run">
            <RunStack.Screen name="Heating" component={Heating} options={{
                headerShown: false
            }} />
            <RunStack.Screen name="Run" component={Results} options={{
                headerShown: false
            }} />
            <RunStack.Screen name="RunAtivity" component={PhysicalAtivity} options={{
                headerShown: false
            }} />
            <RunStack.Screen name="FinishRun" component={FinishPhysicalAtivity} options={{
                headerShown: false,
                gestureEnabled: false
            }} />
        </RunStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Run') {
                            iconName = focused ? 'running' : 'running';
                            return <FontAwesome5 name={iconName} size={30} color={color} />;
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#76AFCD',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    title: "Inicio",
                }} />
                <Tab.Screen name="Run" component={RoutesRun} options={{
                    title: "Praticar",
                }} />
                <Tab.Screen name="Profile" component={Profile} options={{
                    title: "Perfil",
                }} />
            </Tab.Navigator>
    )
}