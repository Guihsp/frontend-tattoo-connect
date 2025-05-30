import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    formContainer: {
        gap: 20,
        marginTop: 20,

    },
    typeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: Colors.inputBorder,
        borderWidth: 2,
        borderRadius: 15,
    },
    btnType: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 13,
    },
    textType: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    active: {
        backgroundColor: Colors.secondary,
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
});