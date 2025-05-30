import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginVertical: 16,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        fontFamily: "Montserrat-Regular",
        color: Colors.primaryText,
    },
});