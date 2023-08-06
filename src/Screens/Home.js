import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Home = () => {
    const signOut = () => {};
    return (
        <Tab.Navigator 
            screenOptions={({ route, navigation }) => ({
                headerLeft: () => {
                    if ( route.name === "Створити публікацію" || route.name === "Профіль" ) {
                        return (
                            <Feather
                                name="arrow-left"
                                size={24}
                                color="#212121"
                                style={{ marginLeft: 16 }}
                                onPress={() => navigation.goBack()}
                            />
                        );
                    }
                },
                headerRight: () => {
                    if (route.name === "Публікації" || route.name === "Профіль") {
                        return (
                            <TouchableOpacity onPress={signOut}>
                                <Feather
                                    name="log-out"
                                    size={24}
                                    color="#BDBDBD"
                                    style={{ marginRight: 10 }}
                                />
                            </TouchableOpacity>
                        );
                    } else {
                        return null;
                    }
                },

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                  
                    if (route.name === "Публікації") {
                        iconName = focused ? "grid" : "grid";
                    } else if (route.name === "Створити публікацію") {
                        iconName = focused ? "plus" : "plus";
                    } else if (route.name === "Профіль") {
                        iconName = focused ? "user" : "user";
                    }
                    return <Feather name={iconName} size={size} color={color} />;
                },

                headerStyle: {
                    height: 88,
                },
                headerStatusBarHeight: 44,
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 17,
                    fontFamily: "robotoMedium",
                    color: "#212121",
                },
                headerTitleContainerStyle: {
                    paddingTop: 11,
                    paddingBottom: 11,
                },

                tabBarShowLabel: false,
                tabBarActiveTintColor:  "#FFFFFF",
                tabBarActiveBackgroundColor: "#FF6C00",
                tabBarItemStyle: {
                    borderRadius: 20,
                    marginLeft: 5,
                    marginRight: 5,
                },
                tabBarStyle: {
                    height: 84,
                    paddingTop: 9,
                    paddingBottom: 34,
                    paddingHorizontal: 66,
                },
                tabBarIconStyle: {
                    width: 70,
                }
            })}
        >
            <Tab.Screen 
                name="Публікації" 
                component={PostsScreen}
            />
            <Tab.Screen 
                name="Створити публікацію" 
                component={CreatePostsScreen}
                options={{
                    tabBarStyle: {
                      display: "none",
                    },
                }} 
            />
            <Tab.Screen 
                name="Профіль" 
                component={ProfileScreen}
                options={{ headerShown: false }} 
            />
        </Tab.Navigator>
        
    );
};

export default Home;