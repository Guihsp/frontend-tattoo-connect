import { View, Image, Text } from 'react-native'

import { useAuth } from '@/src/contexts/AuthContext';
import Container from '@/src/components/global/Container';
import CardButton from '@/src/components/buttons/CardButton'
import Header from '@/src/components/global/Header';
import { styles } from './styles';

export default function HomeScreen() {
    const { user, handleSignOut } = useAuth();

    return ( 
        <>
            <Header />
            <Container scrollable justifyContent='flex-start'>
                <Text onPress={handleSignOut}>
                    sair
                </Text>
                <Text style={styles.title}>
                    Olá, {user?.name}!
                </Text>

                <View style={styles.cards}>
                    {/* Cartão que ocupa a linha inteira */}
                    <CardButton
                        icon='home'
                        title='Gerenciar Parâmetros'
                        route='/(tattoo-artist)/tattooPatametersManagement'
                        style={styles.fullWidthCard}
                    />

                    {/* Linha com dois cartões lado a lado */}
                    <View style={styles.row}>
                        <CardButton
                            icon='userCog'
                            title='Editar Bio'
                            route='/(tattoo-artist)/bioForm'
                            style={styles.halfWidthCard}
                        />
                        <CardButton
                            icon='home'
                            title='Estúdio'
                            route='/(tattoo-artist)/studioForm'
                            style={styles.halfWidthCard}
                        />
                    </View>

                    {/* Outro cartão que ocupa a linha inteira */}
                    <CardButton
                        icon='image'
                        title='Portfólio'
                        route='/(tattoo-artist)/portfolioList'
                        style={styles.fullWidthCard}
                    />

                    
                </View>
            </Container>
        </>
    );
}