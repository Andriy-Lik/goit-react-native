import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
      flex: 1, 
    },
    camera: {
      flex: 1,
      alignContent: "center",
      justifyContent: "flex-end",
    },
    photoView: {
      flex: 1,
      backgroundColor: "transparent",
      justifyContent: "flex-end",
    },
    flipContainer: {
      flex: 0.1,
      alignSelf: "flex-end",
    },
    button: { 
      alignSelf: "center" 
    },
    snapContainer: {
      borderWidth: 2,
      borderColor: "white",
      height: 70,
      width: 70,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },
    cameraIcon: {
      justifyContent: "center",
      alignItems: "center",
    },
    backCameraIcon: {
      justifyContent: "center",
      alignItems: "center",
    },
    btnBackCameraContainer: {
      alignItems: "flex-end",
      marginRight: 20,
    },
    containerBtn: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 20,
    },
    containerBtnBackground:{
      flexDirection: 'row',
      alignItems: "center",
     flex: 1,
     justifyContent: 'space-around',
     marginBottom: 20
    },
    background:{
      width: '100%',
      height: '100%', 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    }
});