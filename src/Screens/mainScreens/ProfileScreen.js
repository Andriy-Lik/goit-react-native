import { useState } from "react";
import { View, Text, ImageBackground, Image, } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from '../../styles/profileStyles';
import Photo120 from '../../images/Photo120.jpg';


const ProfileScreen = () => {
  const [userPost, setUserPost] = useState([]);
  const signOut = () => {};

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        source={require("../../images/PhotoBG.jpg")}>
        <View style={styles.containerProfile}>
          <View style={styles.avatar}>
            
            <View style={styles.imgBox}>
              <Image style={styles.imgAvatar} source={Photo120} />
            </View>
            
            <View>
              <Feather style={styles.iconAdd} name="x-circle" size={24} color="#BDBDBD" />
              <Feather style={styles.iconLogOut} name="log-out" size={24} color="#BDBDBD" onPress={signOut} />
            </View>
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userText}>Natali Romanova</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );  
};

export default ProfileScreen;