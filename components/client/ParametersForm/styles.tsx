import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.inputBorder,
        backgroundColor: Colors.inputBackground,
    },
    buttonsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    buttonSelected: {
        backgroundColor: Colors.quaternary,
        borderColor: Colors.quaternary,
    },
    buttonText: {
        color: Colors.primaryText,
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold",
    },
    buttonTextSelected: {
        color: Colors.tertiary,
    },
    category: {
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        marginVertical: 10,

    },
});