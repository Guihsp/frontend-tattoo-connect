import { router } from 'expo-router';
import { TouchableOpacity, Text, Image } from 'react-native';

import icons from '@/src/assets/images';
import { styles } from './styles';

export default function BackButton() {
    return (   
        <TouchableOpacity onPress={() => router.back()} style={styles.btn}>
            <Image source={icons.arrowBack} />
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    );
}