import { router } from 'expo-router';
import { TouchableOpacity, Text, Image, StyleProp, ViewStyle } from 'react-native';

import icons from '@/assets/images';
import { styles } from './styles';

interface Props {
    style?: StyleProp<ViewStyle>;
    route?: string; 
}
export default function BackButton({ style, route }: Props) {
    return (   
        <TouchableOpacity 
        onPress={() => {
            if (route) {
                router.push(route);
            } else {
                router.back();
            }
        }}
        style={[styles.btn, style]}>
            <Image source={icons.arrowBack} />
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    );
}