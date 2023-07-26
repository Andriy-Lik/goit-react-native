import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import RegistrationScreen from './src/Screens/RegistrationScreen';
// import LoginScreen from './src/Screens/LoginScreen';
import PhotoBG from './src/images/PhotoBG.jpg';


const fonts = () => Font.loadAsync({
  'robotoBold': require('./src/fonts/Roboto-Bold.ttf'),
  'robotoMedium': require('./src/fonts/Roboto-Medium.ttf'),
  'robotoRegular': require('./src/fonts/Roboto-Regular.ttf'),
});

const App = () => {
  const [loadFont, setLoadFont] = useState(false);

  if(loadFont) {
    return (
      <View style={styles.container}>
        <Image source={PhotoBG} style={styles.image} />
  
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        
        <StatusBar style="auto" />
      </View>
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