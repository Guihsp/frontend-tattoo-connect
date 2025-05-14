import { View } from "react-native";
import { styles } from "./styles";

export default function Container({ children }: { children: React.ReactNode }) {
    return <View style={styles.container}>{children}</View>
}