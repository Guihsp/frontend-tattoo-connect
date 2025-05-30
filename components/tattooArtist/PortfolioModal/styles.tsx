import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", alignItems: "center"
    },
    modalContent: {
        backgroundColor: "#fff", borderRadius: 10, padding: 20, alignItems: "center", width: 300
    },
    image: {
        width: 250, height: 250, marginBottom: 16
    },
    description: {
        fontSize: 16, marginBottom: 16, textAlign: "center"
    },
    closeButton: {
        backgroundColor: "#222", padding: 10, borderRadius: 5
    },
    closeText: {
        color: "#fff", fontWeight: "bold"
    }
});