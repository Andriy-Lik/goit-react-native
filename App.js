import 'react-native-gesture-handler';
import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import Home from './src/Screens/Home';
import PhotoBG from './src/images/PhotoBG.jpg';


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
        <MainStack.Navigator>
          <MainStack.Screen name="Registration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
        {/* <View style={styles.container}> */}
          {/* <Image source={PhotoBG} style={styles.image} /> */}
    
          {/* <RegistrationScreen /> */}
          {/* <LoginScreen /> */}
          {/* <PostScreen /> */}
          
          {/* <StatusBar style="auto" /> */}
        {/* </View> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;