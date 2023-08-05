import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: " 100%",
        justifyContent: "center",
        alignItems: "center",
    },
    backImage: {
        flex: 1,
        justifyContent: "flex-end",
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    containerProfile: {
        alignItems: "center",
        width: "100%",
        height: "80%",
    
        backgroundColor: "#fff",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    avatar: {
        position: "relative",
        transform: [{ translateX: 0 }, { translateY: -60 }],
    },
    imgBox: {
        width: 120,
        height: 120,
    },
    imgAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
    iconAdd: {
        width: 25,
        height: 25,
        position: "absolute",
        top: "10%",
        backgroundColor: '#FFFFFF',
        borderRadius: 13,
    
        transform: [{ translateX: 107 }, { translateY: -40 }],
    },
    iconLogOut: {
        position: "absolute",
        transform: [{ translateX: 220 }, { translateY: -40 }],
    },
    userNameContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    userText: {
        fontFamily: "robotoMedium",
        fontSize: 30,
        color: "#212121",
    },
    postContainer: {
        paddingHorizontal: 16,
    },
    photo: {
        height: 200,
        width: 350,
        borderRadius: 8,
    },
    navContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    comentarContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
    },
    locationContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
    },
});