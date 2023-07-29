import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from '../styles/screenStyles';
import { buttonStyles } from '../styles/buttonStyles';


const RegistrationScreen = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(true);

    
    const onLogin = () => {
        Keyboard.dismiss();
        setLogin('');
        setEmail('');
        setPassword('');
    };

    return (
        <View style={screenStyles.form}>
            <View style={screenStyles.addPhoto}>
                <TouchableOpacity style={buttonStyles.addPhotoButton}>
                    <Ionicons style={buttonStyles.addPhotoIcon} name="add-circle-outline" size={25} color="#FF6C00"  />
                </TouchableOpacity>
            </View>
                
            <Text style={screenStyles.title}>Реєстрація</Text>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <TextInput 
                    style={screenStyles.input} 
                    value={login}
                    placeholder="Логін" 
                    onChangeText={setLogin} 
                />
                <TextInput 
                    style={screenStyles.input} 
                    value={email}
                    placeholder="Адреса електронної пошти" 
                    onChangeText={setEmail} 
                />
                <TextInput 
                    style={screenStyles.input} 
                    value={password}
                    placeholder="Пароль" 
                    onChangeText={setPassword} 
                    secureTextEntry={showPassword}
                />
            </KeyboardAvoidingView>
            
            <TouchableOpacity style={buttonStyles.button} onPress={onLogin}>
                <Text style={screenStyles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={screenStyles.regLink}>
                <Text style={screenStyles.text}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegistrationScreen;