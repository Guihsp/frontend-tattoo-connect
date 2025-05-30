import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingTop: 40,
        paddingHorizontal: 20,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 1,
        width: '100%',

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
    logo: {
        width: 110,
        height: 40,
    },
});