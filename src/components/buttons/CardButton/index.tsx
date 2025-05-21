import { TouchableOpacity, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

import icons from '@/src/assets/images/index';
import { styles } from './styles';

interface CardButtonProps {
    icon: keyof typeof icons;
    title: string;
    route: string;
}

export default function CardButton({ icon, title, route }: CardButtonProps) {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.push(route)} style={styles.card}>
            <Image
                source={icons[icon]}
            />
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}