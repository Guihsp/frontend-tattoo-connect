import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    grid: {
        width: "100%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 12,
    },
    imageContainer: {
        flex: 1,
        marginHorizontal: 4,
        aspectRatio: 1,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#eee",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    error: {
        color: "red",
        textAlign: "center",
        marginVertical: 8,
    },
    emptyText: {
        textAlign: "center",
        color: "#888",
        marginVertical: 16,
    },
    deleteButton: {
        position: "absolute",
        top: 4,
        right: 4,
        backgroundColor: "#E74C3C",
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 6,
        zIndex: 2,
    },
    deleteButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
});