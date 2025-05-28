import { View, Image, Text } from 'react-native'

import Container from '@/src/components/global/Container';
import CardButton from '@/src/components/buttons/CardButton'
import Header from '@/src/components/global/Header';
import icons from '@/src/assets/images';
import { styles } from './styles';
import { router } from 'expo-router';

export default function HomeScreen() {

    return ( 
        <Container scrollable justifyContent='flex-start'>
            <Header/>
            
            <Text onPress={() => router.push('/(tattoo-artist)/checkout')}>
                Checkout
            </Text>
            <View style={styles.cards}>
                <CardButton
                    icon='home'
                    title='Gerenciar Parâmetros'
                    route='/(tattoo-artist)/tattooPatametersManagement'
                />
                <CardButton
                    icon='userCog'
                    title='Editar Bio'
                    route='/(tattoo-artist)/bioForm'
                />
                <CardButton
                    icon='home'
                    title='Editar éstudio'
                    route='/(tattoo-artist)/studioForm'
                />
                <CardButton
                    icon='home'
                    title='Portfólio'
                    route='/(tattoo-artist)/portfolioList'
                />

            </View>
        </Container>
    );
}