import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        gap: 20,
        backgroundColor: Colors.background,
        borderRadius: 16,
        marginTop: 16,
        marginBottom: 32,
    },
    title: {
        fontSize: 22,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        marginBottom: 8,
        textAlign: "center",
    },
    category: {
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        marginBottom: 6,
        marginTop: 10,
    },
    input: {
        fontSize: 18,
        fontFamily: "Montserrat-Regular",
        paddingHorizontal: 16,
        height: 48,
        backgroundColor: Colors.inputBackground,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.inputBorder,
        color: Colors.primaryText,
    },
    picker: {
        height: 48,
        width: "100%",
        backgroundColor: Colors.inputBackground,
        color: Colors.primaryText,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.inputBorder,
        marginBottom: 8,
        fontFamily: "Montserrat-Regular",
    },
    error: {
        color: Colors.error,
        textAlign: "center",
        marginTop: 8,
        fontFamily: "Montserrat-SemiBold",
    },
    selectedParamRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        gap: 8,
    },
    removeButton: {
        marginLeft: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: Colors.error,
        borderRadius: 8,
    },
    removeButtonText: {
        color: "#fff",
        fontFamily: "Montserrat-SemiBold",
    },
});