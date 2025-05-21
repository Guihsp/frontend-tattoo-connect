import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 15,
        paddingVertical: 40,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderWidth: 2,
        borderColor: Colors.inputBorder,
        gap: 20,
        width: 353,
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        
    },

    
});