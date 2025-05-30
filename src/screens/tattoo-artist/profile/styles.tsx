import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        color: Colors.primaryText,
        fontFamily: "Montserrat-SemiBold",
    },
});
export default styles;