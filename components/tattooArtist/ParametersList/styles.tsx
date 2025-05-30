import { StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 24,
  },
  itemContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    borderColor: Colors.inputBorder,
    borderWidth: 2,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  category: {
    fontWeight: "bold",
    color: Colors.primaryText,
    marginRight: 8,
    minWidth: 80,
  },
  name: {
    flex: 1,
    color: Colors.primaryText,
  },
  price: {
    fontWeight: "bold",
    color: "#50c76c",
    minWidth: 80,
    textAlign: "right",
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  emptyText: {
    color: "#888",
    fontStyle: "italic",
  },
});