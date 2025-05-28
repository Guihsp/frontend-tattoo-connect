import { router } from 'expo-router';
import { TouchableOpacity, Text, Image, StyleProp, ViewStyle } from 'react-native';

import icons from '@/src/assets/images';
import { styles } from './styles';

interface Props {
    style?: StyleProp<ViewStyle>;
}
export default function BackButton({ style }: Props) {
    return (   
        <TouchableOpacity onPress={() => router.back()} style={[styles.btn, style]}>
            <Image source={icons.arrowBack} />
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    );
}