import { View } from "react-native";
import { styles } from "./styles";

export default function LoaderSpin() {
    return (
        <View style={styles.loaderContainer}>
            <View style={styles.loaderSpinner} />
        </View>
    );
}