import { TouchableOpacity, StyleProp, ViewStyle, Text } from "react-native";
import { styles } from "./styles";

interface GenericButtonProps {
    title: string;
    onPress: () => void;
    filled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export default function GenericButton({ title, onPress, filled = false, style }: GenericButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, filled ? styles.filled : styles.outline, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}