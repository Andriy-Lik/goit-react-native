import { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, TextInput, } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from '../../styles/createPostsStyles';


const CreatePostScreen = ({ navigation }) => {
  const [form, setForm] = useState("");

  
  return (
    <>
      <View style={styles.container}>
          <ImageBackground
            style={styles.FotoContainer}
            source={{ uri: form.imageUrl }}>
            <View style={styles.IconContainerCamera}>
              <TouchableOpacity
                style={styles.iconCameraContauner}>
                <Feather name="camera" size={24} color="#bdbdbd" style={styles.iconCamera} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <TouchableOpacity>
            <Text>Завантажте фото</Text>
          </TouchableOpacity>

          <View>
            <View
              style={{
                ...styles.inputContanier,
              }}>
              <TextInput placeholder="Назва..." style={styles.input} />
            </View>
            <View>
              <TextInput placeholder="Місцевість..." style={styles.inputLocal} />
              <Feather name="map-pin" size={24} color="#bdbdbd" style={styles.marker} />
            </View>
            <TouchableOpacity style={styles.addPhotoContainer}>
              <Text style={styles.addTextPhoto}>
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deleteContainer}>
            <TouchableOpacity style={styles.deleteIcon}>
              <Feather name="trash-2" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      
    </>
  );
};

export default CreatePostScreen;