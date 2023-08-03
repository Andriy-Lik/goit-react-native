import { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, ImageBackground,
    Keyboard, KeyboardAvoidingView, Platform, 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { regLogStyles } from '../styles/regLogStyles';
import { buttonStyles } from '../styles/buttonStyles';


const RegistrationScreen = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [displayText, setDisplaytext] = useState("Показати");
    const [focusLogin, setFocusLogin] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    
    const onLogin = () => {
        // console.log(login, email, password);
        // Alert.alert("Credentials", `${login} + ${email} + ${password}`);
        setLogin('');
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
                    <View style={regLogStyles.addPhoto}>
                        <TouchableOpacity style={buttonStyles.addPhotoButton}>
                            <Ionicons style={buttonStyles.addPhotoIcon} name="add-circle-outline" size={25} color="#FF6C00"  />
                        </TouchableOpacity>
                    </View>
                        
                    <Text style={regLogStyles.title}>Реєстрація</Text>
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                        <TextInput 
                            style={[ regLogStyles.input, focusLogin ? regLogStyles.onFocus : regLogStyles.onBlur, ]} 
                            value={login}
                            name="login"
                            placeholder="Логін" 
                            onChangeText={setLogin} 
                            onFocus={() => setFocusLogin(true)}
                            onBlur={() => setFocusLogin(false)}
                        />
                        <TextInput 
                            style={[ regLogStyles.input, focusEmail ? regLogStyles.onFocus : regLogStyles.onBlur, ]} 
                            value={email}
                            placeholder="Адреса електронної пошти" 
                            onChangeText={setEmail}
                            onFocus={() => setFocusEmail(true)}
                            onBlur={() => setFocusEmail(false)} 
                        />
                        <TextInput 
                            style={[ regLogStyles.input, focusPassword ? regLogStyles.onFocus : regLogStyles.onBlur, ]} 
                            value={password}
                            placeholder="Пароль" 
                            onChangeText={setPassword} 
                            secureTextEntry={showPassword}
                            onFocus={() => setFocusPassword(true)}
                            onBlur={() => setFocusPassword(false)}
                        />
                        <TouchableOpacity style={regLogStyles.regPasswordShow} onPress={handleTogglePassword}>
                            <Text style={regLogStyles.passwordShowText}>{displayText}</Text>
                        </TouchableOpacity>
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