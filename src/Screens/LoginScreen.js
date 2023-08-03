import { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, ImageBackground,
    KeyboardAvoidingView,  Platform, Keyboard 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { regLogStyles } from '../styles/regLogStyles';
import { buttonStyles } from '../styles/buttonStyles';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [displayText, setDisplaytext] = useState("Показати");
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);

    const onLogin = () => {
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        setDisplaytext(showPassword ? "Показати" : "Приховати");
    }, [displayText, showPassword]);
    
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={regLogStyles.container}>
                <ImageBackground source={require("../images/PhotoBG.jpg")} style={regLogStyles.image} />
                <View style={regLogStyles.form}>
                    <Text style={regLogStyles.title}>Увійти</Text>

                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                        <TextInput 
                            style={[regLogStyles.input, focusEmail ? regLogStyles.inputOnFocus : regLogStyles.inputOnBlur,]} 
                            value={email}
                            placeholder="Адреса електронної пошти" 
                            onChangeText={setEmail} 
                            onFocus={() => setFocusEmail(true)}
                            onBlur={() => setFocusEmail(false)}
                        />
                        <TextInput 
                            style={[regLogStyles.input, focusPassword ? regLogStyles.inputOnFocus : regLogStyles.inputOnBlur,]} 
                            value={password}
                            placeholder="Пароль" 
                            onChangeText={setEmail}
                            secureTextEntry={showPassword}
                            onFocus={() => setFocusPassword(true)}
                            onBlur={() => setFocusPassword(false)} 
                        />

                        <TouchableOpacity style={regLogStyles.logPasswordShow} onPress={handleTogglePassword}>
                            <Text>{displayText}</Text>
                        </TouchableOpacity>
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