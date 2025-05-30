import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
});