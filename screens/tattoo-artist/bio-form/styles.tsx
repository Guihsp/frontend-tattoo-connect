import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.primaryText,
        marginBottom: 20,
        marginTop: 40,
    },
    bioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 40,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: Colors.quinary,
        marginRight: 20,
    },
    bioTextContainer: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.primaryText,
        marginBottom: 8,
    },
    bioText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: Colors.primaryText,
    },
});