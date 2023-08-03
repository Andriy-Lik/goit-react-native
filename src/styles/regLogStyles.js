import { StyleSheet } from "react-native";

export const regLogStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        width: '100%',
        marginTop: 'auto',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    addPhoto: {
        width: 120,
        height: 120,
        marginTop: -60,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    title: {
        marginTop: 32,
        marginBottom: 32,
        textAlign: "center",
        fontFamily: 'robotoMedium',
        fontSize: 36,
        color: '#212121',
    },
    input: {
        height: 50,
        marginBottom: 16,
        padding: 16,
        color: '#BDBDBD',
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        fontFamily: 'robotoRegular',
        borderRadius: 8,
        fontSize: 16,
    },
    buttonText: {
        color: '#fff',
        textAlign: "center",
        fontFamily: 'robotoRegular',
        fontSize: 16,
    },
    regLink: {
        marginBottom: 78,
    },
    loginLink: {
        marginBottom: 144,
    },
    text: {
        textAlign: "center",
        fontFamily: 'robotoRegular',
        fontSize: 16,
    },
});