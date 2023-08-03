import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { 
    View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, 
    KeyboardAvoidingView, Alert, Platform, Keyboard 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { screenStyles } from '../styles/regLogStyles';
import { buttonStyles } from '../styles/buttonStyles';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const onLogin = () => {
    //     console.log(email, password);
    //     Alert.alert("Credentials", `${email} + ${password}`);
    //     setEmail('');
    //     setPassword('');
    // };
    
    const handleEmail = text => {
        setEmail(text);
    };

    const handlePassword = text => {
        setPassword(text);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={screenStyles.form}>
                <Text style={screenStyles.title}>Увійти</Text>

                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
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
                
                <TouchableOpacity style={buttonStyles.button} onPress={() => navigation.navigate("Home")}>
                    <Text style={screenStyles.buttonText}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity style={screenStyles.loginLink} onPress={() => navigation.navigate("Registration")}>
                    <Text style={screenStyles.text}>Немає акаунту? Зареєструватися</Text>
                </TouchableOpacity>
                
            </View>
        </TouchableWithoutFeedback>
        
    );
};

export default LoginScreen;