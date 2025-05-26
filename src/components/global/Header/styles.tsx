import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.primary,
    },
    text: {
        color: Colors.primaryText,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});