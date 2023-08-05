import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './authScreens/RegistrationScreen';
import LoginScreen from './authScreens/LoginScreen';
import Home from "./Home";


const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator initialRouteName="RegistrationScreen">
                <AuthStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
                <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </AuthStack.Navigator>
        );
    }

    return (
        <HomeStack.Navigator initialRouteName="Home" >
            <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            {/* <HomeStack.Screen name="Створити публікацію" component={CreatePostsScreen} />
            <HomeStack.Screen name="Профіль" component={ProfileScreen} /> */}
        </HomeStack.Navigator>
    );
};

const Navigate = () => {
    const routing = useRoute(true);

    return (
        <NavigationContainer>
            {routing}   
        </NavigationContainer>
    );
};

export default Navigate;