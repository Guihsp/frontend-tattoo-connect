import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 15,
        paddingVertical: 50,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: Colors.inputBorder,
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    icon: {
        width: 45,
        height: 45,
        resizeMode: "contain",
    },

    
});