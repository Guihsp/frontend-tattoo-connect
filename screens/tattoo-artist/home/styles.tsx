import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    logoContainer: {
        alignItems: "center",
        marginTop: 80,
        marginBottom: 40,
    }, 
    cards: {
        gap: 20,
        marginVertical: 20,
    },
    title: {
        fontSize: 26,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        gap: 20,
    },
    fullWidthCard: {
        width: '100%',
        justifyContent: "center",
    },
    halfWidthCard: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});