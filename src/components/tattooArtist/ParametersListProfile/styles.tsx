import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        marginBottom: 10,
    },
    parametersList: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
        marginBottom: 20,
    },
    parameterItem: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.inputBorder,
        backgroundColor: Colors.inputBackground,
    }, 
    parameterText: {
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: Colors.primaryText,
    },
});