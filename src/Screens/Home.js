import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';


const Tabs = createBottomTabNavigator();

const Home = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({})}
        >
            <Tabs.Screen name="Публікації" component={PostsScreen} options={{ headerShown: false }} />
            <Tabs.Screen name="Створити публікацію" component={CreatePostsScreen} options={{ headerShown: false }} />
            <Tabs.Screen name="Профіль" component={ProfileScreen} options={{ headerShown: false, }} />
        </Tabs.Navigator>
    );
};

export default Home;