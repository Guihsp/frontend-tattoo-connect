import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.primaryText,
        textAlign: 'center',
    }
});