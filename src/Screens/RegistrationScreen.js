import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from '../styles/screenStyles';
import { buttonStyles } from '../styles/buttonStyles';


const RegistrationScreen = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        setLogin(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        Keyboard.dismiss();
        setLogin('');
        setEmail('');
        setPassword('');
    };

    return (
        <View style={screenStyles.form}>
            <View style={screenStyles.addPhoto}></View>
                <TouchableOpacity style={buttonStyles.addPhotoButton}>
                    <Ionicons style={buttonStyles.addPhotoIcon} name="add-circle-outline" size={25} color="#FF6C00"  />
                </TouchableOpacity>
            <Text style={screenStyles.title}>Реєстрація</Text>
            <TextInput 
                style={screenStyles.input} 
                value={login}
                placeholder="Логін" 
                onChange={handleLogin} 
            />
            <TextInput 
                style={screenStyles.input} 
                value={email}
                placeholder="Адреса електронної пошти" 
                onChange={handleEmail} 
            />
            <TextInput 
                style={screenStyles.input} 
                value={password}
                placeholder="Пароль" 
                onChange={handlePassword} 
            />
            <TouchableOpacity style={buttonStyles.button} onPress={onSubmit}>
                <Text style={screenStyles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={screenStyles.regLink}>
                <Text style={screenStyles.text}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegistrationScreen;