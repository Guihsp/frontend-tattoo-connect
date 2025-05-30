import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        gap: 20,
    },
    label: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    input: {
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
    line: {
        width: "45%",
        height: 1,
        backgroundColor: Colors.tertiary,
    },
    text: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },


});