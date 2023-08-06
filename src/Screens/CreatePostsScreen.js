import { useEffect, useState } from "react";
import { View, Text, ImageBackground, TextInput, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { Feather, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import CreateCamera from './CreateCamera';
import { styles } from '../styles/createPostsStyles';


const CreatePostScreen = ({ navigation }) => {
  const [form, setForm] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [cameraStatus, setCameraStatus] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [locationPhoto, setLocationPhoto] = useState(null);

  function ClearPost() {
    setLocationName("");
    setName("");
    setForm("");
  };

  async function sendPost() {
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setLocationPhoto(coords);
    uploadPostToServer();
    navigation.navigate("Публікації");
    setForm("");
    setName("");
    setLocationName("");
  };

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
        setHasPermission(cameraStatus === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.canceled) {
      return null;
    }
    return result;
  };

  const onImagePick = async () => {
    const result = await pickImage();
    const imageUrl = result?.assets[0].uri || null;

    setForm((prev) => ({
      ...prev,
      imageUrl,
    }));
  };
  
  return (
    <>
      <CreateCamera
        cameraStatus={cameraStatus}
        setCameraStatus={setCameraStatus}
        hasPermission={hasPermission}
        photo={form.imageUrl}
        setForm={setForm}
      />

      {!cameraStatus && (
        <View style={styles.container}>
        
          <ImageBackground style={styles.fotoContainer} source={{ uri: form.imageUrl }}>
            <View style={styles.iconCameraBox}>
              <TouchableOpacity style={styles.iconCameraButton} onPress={() => setCameraStatus(true)}>
                <Feather name="camera" size={24} color="#bdbdbd" style={styles.iconCamera} />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <TouchableOpacity style={styles.addPhotoButton} onPress={onImagePick}>
            <Text style={styles.addPhotoText}>Завантажте фото</Text>
          </TouchableOpacity>

          <View>
            <View style={styles.inputContainer}>
              <TextInput 
                onChangeText={setName}
                value={name}
                placeholder="Назва..." 
                style={styles.input} 
              />
            </View>
            <View>
              <TextInput 
                onChangeText={setLocationName}
                value={locationName}
                placeholder="Місцевість..." 
                style={styles.inputLocal} 
              />
              <Feather name="map-pin" size={24} color="#bdbdbd" style={styles.mapIcon} />
            </View>
            <TouchableOpacity
              onPress={sendPost}
              disabled={!name || !form || !locationName}
              style={[ !name || !form || !locationName ? styles.button : styles.activeButton ]}
            >
              <Text style={[ !name || !form || !locationName ? styles.buttonText : styles.activeButtonText ]}>
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.deleteContainer}>
            <TouchableOpacity style={styles.deleteButton} onPress={() => {}}>
              <Feather name="trash-2" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      
    </>
  );
};

export default CreatePostScreen;