import 'react-native-gesture-handler';
import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from './src/Screens/Navigation';


const fonts = () => Font.loadAsync({
  'robotoBold': require('./src/fonts/Roboto-Bold.ttf'),
  'robotoMedium': require('./src/fonts/Roboto-Medium.ttf'),
  'robotoRegular': require('./src/fonts/Roboto-Regular.ttf'),
});

const App = () => {
  const [loadFont, setLoadFont] = useState(false);

  if(loadFont) {
    return (
      <Navigation />
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