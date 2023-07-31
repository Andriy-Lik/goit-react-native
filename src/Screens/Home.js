import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { psStyles } from '../styles/homeScreenStyles';

const Home = () => {
    return (
        <View style={psStyles.container}>
            <View style={psStyles.header}>
                <Text style={psStyles.title}>Публікації</Text>
                <Feather style={psStyles.iconLogOut} name="log-out" size={24}  />
            </View>
            <View style={psStyles.body}></View>
            
            <View style={psStyles.tabBar}>
                <Feather style={psStyles.iconTabBar} name="grid" size={24} />
                <Feather style={psStyles.iconTabBar} name="user" size={24} />
            </View>
            
        </View>
    );
};

export default Home;