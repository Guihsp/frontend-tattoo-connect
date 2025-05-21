import Container from '@/src/components/global/Container';
import { useAuth } from '@/src/contexts/AuthContext';
import { Text } from 'react-native';

export default function Home() {
    const { handleSignOut } = useAuth();
    return (
        <Container>
            <Text>Client</Text>
            <Text onPress={handleSignOut}>Sign Out</Text>
        </Container>
    )
}