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
        gap: 5,
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },

    
});