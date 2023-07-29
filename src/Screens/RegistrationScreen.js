import React, { useState } from "react";
import { 
    View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, 
    Keyboard, KeyboardAvoidingView, Platform, Alert,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from '../styles/screenStyles';
import { buttonStyles } from '../styles/buttonStyles';


const RegistrationScreen = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onLogin = () => {
        console.log(login, email, password);
        Alert.alert("Credentials", `${login} + ${email} + ${password}`);
        setLogin('');
        setEmail('');
        setPassword('');
    };

    const handleLogin = text => {
        setLogin(text);
    };

    const handleEmail = text => {
        setEmail(text);
    };

    const handlePassword = text => {
        setPassword(text);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        onChangeText={handleLogin} 
                    />
                    <TextInput 
                        style={screenStyles.input} 
                        value={email}
                        placeholder="Адреса електронної пошти" 
                        onChangeText={handleEmail} 
                    />
                    <TextInput 
                        style={screenStyles.input} 
                        value={password}
                        placeholder="Пароль" 
                        onChangeText={handlePassword} 
                        secureTextEntry
                    />
                </KeyboardAvoidingView>
                
                <TouchableOpacity style={buttonStyles.button} onPress={onLogin}>
                    <Text style={screenStyles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={screenStyles.regLink}>
                    <Text style={screenStyles.text}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
        
    );
};

export default RegistrationScreen;