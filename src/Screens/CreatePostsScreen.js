import { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, } from "react-native";
import { Camera } from "expo-camera";
import { Feather } from '@expo/vector-icons';
import { styles } from '../styles/createPostsStyles';


const CreatePostScreen = ({ navigation }) => {
  const [form, setForm] = useState("");

  
  return (
    <>
      <View style={styles.container}>
        <ImageBackground style={styles.FotoContainer}>
          <View style={styles.iconCameraBox}>
            <TouchableOpacity style={styles.iconCameraButton} onPress={() => {}}>
              <Feather name="camera" size={24} color="#bdbdbd" style={styles.iconCamera} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
          <TouchableOpacity style={styles.addPhotoButton} onPress={() => {}}>
            <Text style={styles.addPhotoText}>Завантажте фото</Text>
          </TouchableOpacity>

          <View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Назва..." style={styles.input} />
            </View>
            <View>
              <TextInput placeholder="Місцевість..." style={styles.inputLocal} />
              <Feather name="map-pin" size={24} color="#bdbdbd" style={styles.marker} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deleteContainer}>
            <TouchableOpacity style={styles.deleteIcon} onPress={() => {}}>
              <Feather name="trash-2" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      
    </>
  );
};

export default CreatePostScreen;