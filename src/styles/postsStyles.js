import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 16,
        paddingLeft: 22,
        paddingTop: 32,
        paddingBottom: 22,
        backgroundColor: "#ffffff",
    },
    userContainer: {
        flex: 1,
    },
    userPhotoContainer: {
        flexDirection: "row",
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    userTextContainer: {
        justifyContent: "center",
        marginLeft: 8,
    },
    userTextName: {
        fontFamily: "robotoBold",
        fontSize: 13,
        color: "#212121",
    },
    userTextMail: {
        fontFamily: "robotoRegular",
        fontSize: 11,
        color: "rgba(33, 33, 33, 0.8)",
    },
    containerFlatList: {
        flex: 1,
        paddingBottom: 40,
    },
    photo: {
        height: 240,
        width: "auto",
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