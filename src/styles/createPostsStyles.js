import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#FFFFFF",
    },
    fotoContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 8,
        marginTop: 34,
        width: "100%",
        height: 240,
        backgroundColor: "#F6F6F6",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        alignItems: "center",
    },
    iconCameraBox: {},
    iconCameraButton: {
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
    },
    iconCamera: {
        transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    addPhotoButton: {},
    addPhotoText: {
        fontFamily: 'robotoRegular',
        fontSize: 16,
        color: '#bdbdbd',
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 16,
        borderBottomColor: "#E8E8E8",
        lineHeight: 19,
        color: "#BDBDBD",
        width: "100%",
        height: 50,
    },
    inputLocal: {
        borderBottomWidth: 1,
        fontSize: 16,
        borderBottomColor: "#E8E8E8",
        lineHeight: 19,
        color: "#BDBDBD",
        width: "100%",
        height: 50,
        paddingLeft: 32,
    },
    mapIcon: {
        flex: 1,
        position: "absolute",
        marginTop: 13,
    },
    button: {
        padding: 16,
        marginTop: 50,
        borderRadius: 25,
        backgroundColor: "#f6f6fF6",
        justifyContent: "center",
        alignItems: "center",
    },
    activeButton: {
        padding: 16,
        marginTop: 50,
        borderRadius: 25,
        backgroundColor: "#ff6c00",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#bdbdbd",
        textAlign: "center",
        fontFamily: 'robotoRegular',
        fontSize: 16,
    },
    activeButtonText: {
        color: "#ffffff",
        textAlign: "center",
        fontFamily: 'robotoRegular',
        fontSize: 16,
    },
    deleteContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 34,
    },
    deleteButton: {
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 40,
        borderRadius: 20,
    },
});