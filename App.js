import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import Home from './src/Screens/Home';


const fonts = () => Font.loadAsync({
  'robotoBold': require('./src/fonts/Roboto-Bold.ttf'),
  'robotoMedium': require('./src/fonts/Roboto-Medium.ttf'),
  'robotoRegular': require('./src/fonts/Roboto-Regular.ttf'),
});

const MainStack = createStackNavigator();

const App = () => {
  const [loadFont, setLoadFont] = useState(false);

  if(loadFont) {
    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="RegistrationScreen">
          <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
          <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </MainStack.Navigator>
      </NavigationContainer>
      
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setLoadFont(true)} 
        onError={(err) => console.log(err)} 
      />
    );
  }

  
};

export default App;