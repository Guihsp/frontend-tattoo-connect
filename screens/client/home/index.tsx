import { Text, Image } from 'react-native';

import { useAuth } from "@/src/contexts/AuthContext"
import Container from "@/src/components/global/Container"
import  Header  from "@/src/components/global/Header"
import icons from "@/src/assets/images"

import { styles } from "./styles"
import CardButton from '@/src/components/buttons/CardButton';

export default function HomeScreen() {
    const { user } = useAuth();
    return (
        <>
            <Header />
            <Container scrollable justifyContent='flex-start'>
                <Text style={styles.title}>
                    Bem-vindo, {user?.name}!
                </Text>
            
                <Image
                    source={icons.logoHorizontal}
                    resizeMode="contain"
                    style={styles.image}
                />
                <CardButton
                    title="Procurar Tatuadores"
                    icon="search"
                    route='/(client)/parametersForm'
                    style={styles.card}
                />

            </Container>
        </>
    )
}