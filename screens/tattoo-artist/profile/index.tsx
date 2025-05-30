import { View, Text } from 'react-native';

import Container from '@/components/global/Container';
import BackButton from '@/components/buttons/BackButton';
import ProfileDetails from '@/components/tattooArtist/ProfileDetails';
import styles from "./styles";

export default function ProfileScreen() {
    return (
        <Container justifyContent='flex-start' scrollable>
            <View style={styles.header}>
                <BackButton route='/(tattoo-artist)' />
                <Text style={styles.title}>Perfil do tatuador</Text>
            </View>
            <ProfileDetails />
        </Container>
    );
}