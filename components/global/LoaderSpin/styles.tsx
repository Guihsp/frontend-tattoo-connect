import { StyleSheet } from 'react-native';
import Colors from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    loaderSpinner: {
        width: 50,
        height: 50,
        borderWidth: 5,
        borderColor: Colors.primary,
        borderRadius: 25,
        borderTopColor: 'transparent',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationName: 'spin',
    }
});