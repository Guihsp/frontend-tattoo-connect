import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    card: {
        borderColor: Colors.inputBorder,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        backgroundColor: Colors.inputBackground,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: Colors.inputBorder,
    },
    infoContainer: {
        flexDirection: "row",
        gap: 5,
        borderBottomColor: Colors.secondaryText,
        borderBottomWidth: 2,

    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    distance: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        color: Colors.primaryText,
    },
    footerCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    }, 
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    ratingText: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        color: Colors.primaryText,
    },
    button: {
        backgroundColor: Colors.quaternary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
});