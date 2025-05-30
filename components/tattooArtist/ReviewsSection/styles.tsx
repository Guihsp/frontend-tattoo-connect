import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
        marginBottom: 8,
        color: Colors.primaryText,
    },
    card: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 10,
        borderColor: Colors.inputBorder,
        borderWidth: 2,

        padding: 12,
        marginBottom: 12,
    },
    name: {
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    rating: {
        color: Colors.accent,
        marginBottom: 4,
    },
    comment: {
        color: Colors.primaryText,
        fontFamily: "Montserrat-Regular",
    },
    error: {
        color: "#c00",
        textAlign: "center",
        marginVertical: 8,
    },
    empty: {
        color: "#888",
        textAlign: "center",
        marginVertical: 8,
    }
});