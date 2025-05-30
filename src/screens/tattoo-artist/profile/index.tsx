import { View, Text } from 'react-native';

import Container from '@/src/components/global/Container';
import BackButton from '@/src/components/buttons/BackButton';
import ProfileDetails from '@/src/components/tattooArtist/ProfileDetails';
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