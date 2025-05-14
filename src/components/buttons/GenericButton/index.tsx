import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native";

interface GenericButtonProps {
    title: string;
    onPress: () => void;
    filled?: boolean;
}

export default function GenericButton({ title, onPress, filled = false }: GenericButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, filled ? styles.filled : styles.outline]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}