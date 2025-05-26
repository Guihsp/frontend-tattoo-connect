import { View, Text } from 'react-native';

import Container from '@/src/components/global/Container';
import BackButton from '@/src/components/buttons/BackButton';
import Profile from '@/src/components/tattooArtist/Profile';
import styles from "./styles";

export default function ProfileScreen() {
    return (
        <Container justifyContent='flex-start'>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.title}>Perfil do tatuador</Text>
            </View>
            <Profile />
        </Container>
    );
}