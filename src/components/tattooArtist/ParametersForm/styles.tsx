import { StyleSheet } from 'react-native';
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        gap: 20,
        paddingVertical: 40,
    },
    label: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    input: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: "Montserrat-Regular",
        paddingHorizontal: 20,
        paddingVertical: 5,
        height: 50,
        backgroundColor: Colors.inputBackground,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Colors.inputBorder,
        color: Colors.primaryText,
    },
    inputPlaceholder: {
        color: Colors.inputBorder,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    error: {
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: Colors.error,
        textAlign: "center",
    },
    title: {
        fontSize: 24,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.primaryText,
        marginBottom: 20,
        marginTop: 40,
    },
    category: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.primaryText,
        marginBottom: 10,
    },
})