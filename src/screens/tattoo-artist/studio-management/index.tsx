import { View, Text } from 'react-native';
import { router } from 'expo-router';
import Container from '@/src/components/global/Container';
import styles from "./styles";
import GenericButton from '@/src/components/buttons/GenericButton';
import BackButton from '@/src/components/buttons/BackButton';

export default function StudioManagementScreen() {
    return (
        <Container justifyContent='flex-start'>
            <BackButton />
            <Text style={styles.title}>Gerencie seu estúdio</Text>
            <GenericButton
                title='Cadastrar Estúdio'
                onPress={() => router.push('/(tattoo-artist)/studioRegister')}
                filled={true}
            />  

            <View style={styles.studioList}>
                <Text style={styles.titleList}>Estúdios</Text>
            </View>
        </Container>
    );
}