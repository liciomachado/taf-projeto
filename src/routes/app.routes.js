import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack'
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Results from '../pages/Results';
import PhysicalAtivity from '../pages/PhysicalAtivity';
import FinishPhysicalAtivity from '../pages/FinishPhysicalAtivity';
import Heating from '../pages/Heating';
import LastTaf from '../pages/LastTaf';
import AccountConfig from '../pages/AccountConfig';
import Weak from '../pages/Weak';

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

const HomeStack = createStackNavigator();
function RoutesHome() {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Heating" component={Heating} options={{
                headerShown: false
            }} />
            <HomeStack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <HomeStack.Screen name="WeakResults" component={Weak} options={{
                headerShown: false
            }} />
            <HomeStack.Screen name="LastTaf" component={LastTaf}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }} />
        </HomeStack.Navigator>
    )
}

const ProfileStack = createStackNavigator();
function RoutesProfile() {
    return (
        <ProfileStack.Navigator initialRouteName="Profile" mode='modal'>
            <ProfileStack.Screen name="Profile" component={Profile} options={{
                title: 'Perfil',
                headerShown: false
            }} />
            <ProfileStack.Screen name="AccountConfig" component={AccountConfig}
                options={{
                    //headerShown: false,
                    headerLeft: () => <MaterialIcons name="keyboard-arrow-down" size={36} color="#76AFCD" />,
                    headerTintColor: '#76AFCD',
                    title: 'CONFIGURAÇÕES',
                    cardStyle: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)'
                    },
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                }} />
        </ProfileStack.Navigator>
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
            <Tab.Screen name="Home" component={RoutesHome} options={{
                title: "Inicio",
            }} />
            <Tab.Screen name="Run" component={RoutesRun} options={{
                title: "Praticar",
            }} />
            <Tab.Screen name="Profile" component={RoutesProfile} options={{
                title: "Perfil",
            }} />
        </Tab.Navigator>
    )
}