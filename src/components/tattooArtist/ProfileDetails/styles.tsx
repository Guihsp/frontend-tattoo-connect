import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    bioContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    bioText: {
        gap: 5
    },
    name: {
        fontSize: 24,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
    },
    bio: {
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: Colors.primaryText,
        maxWidth: "80%",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.quinary,
    },
    infoContainer: {
        marginTop: 20,
        gap: 10,
    },
    infoItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    infoValue: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        color: Colors.primaryText,
    },
    icon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        color: Colors.primaryText,
        marginVertical: 20,
    },
    error: {
        color: Colors.primaryText,
        textAlign: "center",
        fontStyle: "italic",
        marginVertical: 8,
    },
    empty: {
        textAlign: "center",
        color: "#888",
        marginVertical: 16,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        color: Colors.primaryText,
    }
});