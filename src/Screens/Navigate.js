import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import Home from './Home';

const MainStack = createStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="RegistrationScreen">
                <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false, title: 'Registration' }} />
                <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default Navigate;