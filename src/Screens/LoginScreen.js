import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { screenStyles } from '../styles/screenStyles';
import { buttonStyles } from '../styles/buttonStyles';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        Keyboard.dismiss();
        setEmail('');
        setPassword('');
    };

    return (
        <View style={screenStyles.form}>
            <Text style={screenStyles.title}>Увійти</Text>
            <TextInput 
                style={screenStyles.input} 
                value={email}
                placeholder="Адреса електронної пошти" 
                onChange={handleEmail} 
            />
            <TextInput 
                style={screenStyles.input} 
                value={password}
                placeholder=".........." 
                onChange={handlePassword} 
            />
            <TouchableOpacity style={buttonStyles.button} onPress={onSubmit}>
                <Text style={screenStyles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={screenStyles.loginLink}>
                <Text style={screenStyles.text}>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default LoginScreen;