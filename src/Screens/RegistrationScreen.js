import React, { useState } from "react";
import { 
    View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, ImageBackground,
    Keyboard, KeyboardAvoidingView, Platform, Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { regLogStyles } from '../styles/regLogStyles';
import { buttonStyles } from '../styles/buttonStyles';
import PhotoBG from '../images/PhotoBG.jpg';


const RegistrationScreen = () => {
    const navigation = useNavigation();

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const onLogin = () => {
    //     console.log(login, email, password);
    //     Alert.alert("Credentials", `${login} + ${email} + ${password}`);
    //     setLogin('');
    //     setEmail('');
    //     setPassword('');
    // };

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
            <View style={regLogStyles.container}>
                <ImageBackground source={require("../images/PhotoBG.jpg")} style={regLogStyles.image} />
                <View style={regLogStyles.form}>
                <View style={regLogStyles.addPhoto}>
                    <TouchableOpacity style={buttonStyles.addPhotoButton}>
                        <Ionicons style={buttonStyles.addPhotoIcon} name="add-circle-outline" size={25} color="#FF6C00"  />
                    </TouchableOpacity>
                </View>
                    
                <Text style={regLogStyles.title}>Реєстрація</Text>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <TextInput 
                        style={regLogStyles.input} 
                        value={login}
                        placeholder="Логін" 
                        onChangeText={handleLogin} 
                    />
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
                    <Text style={regLogStyles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={regLogStyles.regLink} onPress={() => navigation.navigate("Login")}>
                    <Text style={regLogStyles.text}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        </TouchableWithoutFeedback>
        
    );
};

export default RegistrationScreen;