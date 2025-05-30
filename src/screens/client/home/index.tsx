import { Text } from 'react-native';

import { useAuth } from "@/src/contexts/AuthContext"
import Container from "@/src/components/global/Container"
import  Header  from "@/src/components/global/Header"

import { styles } from "./styles"
import CardButton from '@/src/components/buttons/CardButton';

export default function HomeScreen() {
    const { user } = useAuth();
    return (
        <Container justifyContent='flex-start'>
            <Header />
            <Text >
                Bem-vindo, {user?.name }!
            </Text>

            <CardButton
                title="Procurar Tatuadores"
                icon="search"
                route='/(client)/parametersForm'
            />

        </Container>
    )
}