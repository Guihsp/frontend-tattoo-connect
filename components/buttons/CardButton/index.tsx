import { TouchableOpacity, Text, Image, StyleProp, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';

import icons from '@/src/assets/images/index';
import { styles } from './styles';

interface CardButtonProps {
    icon: keyof typeof icons;
    title: string;
    route: string;
    style?: StyleProp<ViewStyle>;
}

export default function CardButton({ icon, title, route, style }: CardButtonProps) {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.push(route)} style={[styles.card, style]}>
            <Image
                source={icons[icon]}
                style={styles.icon}
            />
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}