import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    button: {
        width: "100%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    filled: {
        backgroundColor: Colors.quaternary,
    },
    outline: {
        borderWidth: 2,
        borderColor: Colors.tertiary,
    },
    buttonText: {
        color: Colors.primaryText,
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
    },
}); 