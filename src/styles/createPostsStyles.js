import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    AddBackColor: {
        backgroundColor: "#FF6C00",
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        color: "#FFFFFF",
    },
    AddRextColor: {
        color: "#FFFFFF",
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
    marker: {
        flex: 1,
        position: "absolute",
        marginTop: 13,
    },
    addPhotoContainer: {
        backgroundColor: "#F6F6F6",
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    addTextPhoto: {
        color: "#BDBDBD",
    },
    iconCamera: {
        transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    FotoContainer: {
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
    iconCameraContauner: {
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
    },
    
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    deleteIcon: {
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 40,
        borderRadius: 40,
    },
    deleteContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
});