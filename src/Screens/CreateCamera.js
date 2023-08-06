import { useState } from "react";
import { View, TouchableOpacity, ImageBackground, } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from '../styles/createCameraStyles';
  
  
const CreatCamera = (props) => {
    const { cameraStatus, setCameraStatus,  photo, setForm, } = props;
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(CameraType.back);
  
    const takePhoto = async () => {
      const takePhotoRef = await cameraRef.takePictureAsync();
      setForm((prev) => ({ ...prev, imageUrl: takePhotoRef.uri }));
    };
  
    return (
      <>
        {cameraStatus && photo && (
            <View style={{zIndex: 1,}}>
                <ImageBackground source={{uri: photo }} style={styles.background}>
                    <View style={styles.containerBtnBackground}>
                        <TouchableOpacity onPress={() => { setCameraStatus(false) }}>
                            <Feather name="file-plus" size={32} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setForm((prev) => ({ ...prev, imageUrl: null })) }}>
                            <Feather name="rotate-ccw" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )}

        {cameraStatus && (
            <View style={styles.container}>
                <Camera style={styles.camera} ref={setCameraRef} type={type}>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity
                            onPress={() => { setType( type === CameraType.back ? CameraType.front : CameraType.back ) }}
                            style={styles.btnBackCameraContainer}
                        >
                            <Ionicons name="camera-reverse-outline" size={30} color="white" style={styles.backCameraIcon} />
                        </TouchableOpacity>
        
                        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
                            <Feather name="camera" size={40} color="white" style={styles.cameraIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setCameraStatus(false) }} style={styles.btnBackCameraContainer}>
                            <Feather name="camera-off" size={30} color="white" style={styles.btnBackCamera} />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        )}
      </>
    );
};

export default CreatCamera;