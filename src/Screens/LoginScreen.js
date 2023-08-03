import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, ImageBackground,
    KeyboardAvoidingView, Alert, Platform, Keyboard 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { regLogStyles } from '../styles/regLogStyles';
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
            <View style={regLogStyles.container}>
                <ImageBackground source={require("../images/PhotoBG.jpg")} style={regLogStyles.image} />
                <View style={regLogStyles.form}>
                    <Text style={regLogStyles.title}>Увійти</Text>

                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                        <TextInput 
                            style={regLogStyles.input} 
                            value={email}
                            placeholder="Адреса електронної пошти" 
                            onChangeText={handleEmail} 
                        />
                        <TextInput 
                            style={regLogStyles.input} 
                            value={password}
                            placeholder="Пароль" 
                            onChangeText={handlePassword}
                            secureTextEntry 
                        />
                    </KeyboardAvoidingView>

                    <TouchableOpacity style={buttonStyles.button} onPress={() => navigation.navigate("Home")}>
                        <Text style={regLogStyles.buttonText}>Увійти</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={regLogStyles.loginLink} onPress={() => navigation.navigate("Registration")}>
                        <Text style={regLogStyles.text}>Немає акаунту? Зареєструватися</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    );
};

export default LoginScreen;