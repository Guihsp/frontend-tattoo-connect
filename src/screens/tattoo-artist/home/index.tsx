import { View, Text, Image } from 'react-native'

import { useAuth } from '@/src/contexts/AuthContext';
import Container from '@/src/components/global/Container';
import CardButton from '@/src/components/buttons/CardButton'
import icons from '@/src/assets/images';
import { styles } from './styles';

export default function HomeScreen() {
    const {  handleSignOut} = useAuth();

    return ( 
        <Container scrollable>
            <Text onPress={handleSignOut}>
                sair
            </Text>
            <View style={styles.logoContainer}>
                <Image
                    source={icons.logoHorizontal}
                    style={{ width: 300, height: 150, objectFit: 'contain' }}
                />
            </View>

            <View style={styles.cards}>
                <CardButton
                    icon='home'
                    title='Gerenciar Estúdio'
                    route='/(tattoo-artist)/studioManagement'
                />
                <CardButton
                    icon='home'
                    title='Gerenciar preços de tatuagens'
                    route='/(tattoo-artist)/tattooPrices'
                />
                <CardButton
                    icon='home'
                    title='Gerenciar portfólio'
                    route='/(tattoo-artist)/portfolio'
                />
                <CardButton
                    icon='home'
                    title='Gerenciar portfólio'
                    route='/(tattoo-artist)/portfolio'
                />
                <CardButton
                    icon='home'
                    title='Gerenciar portfólio'
                    route='/(tattoo-artist)/portfolio'
                />
            </View>
        </Container>
    );
}