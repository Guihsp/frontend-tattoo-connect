import { View, Image, Text, Modal, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { useAuth } from '@/src/contexts/AuthContext';
import Container from '@/src/components/global/Container';
import CardButton from '@/src/components/buttons/CardButton'
import Header from '@/src/components/global/Header';
import { styles } from './styles';
import Colors from '@/src/constants/Colors';

export default function HomeScreen() {
    const { user } = useAuth();
    const [showPremiumModal, setShowPremiumModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('showPremiumModal').then(value => {
                console.log('Valor lido do AsyncStorage:', value);
                if (value === 'true') {
                    setShowPremiumModal(true);
                    AsyncStorage.removeItem('showPremiumModal');
                }
            });
        }, 1000); // 500ms de delay
    }, []);

    return ( 
        <>
            <Header />
            <Container scrollable justifyContent='flex-start'>
                <Text style={styles.title}>
                    Olá, {user?.name}!
                </Text>

                <View style={styles.cards}>
                    {/* Cartão que ocupa a linha inteira */}
                    <CardButton
                        icon='tattooPen'
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
            <Modal
                visible={showPremiumModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowPremiumModal(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: Colors.background,
                        borderRadius: 12,
                        padding: 24,
                        alignItems: 'center',
                        maxWidth: 320
                    }}>
                        <Text style={{ fontSize: 20, fontFamily:"Montserrat-SemiBold" , marginBottom: 12, textAlign: 'center', color: Colors.primaryText }}>
                            Parabéns!
                        </Text>
                        <Text style={{ fontSize: 16, marginBottom: 16, textAlign: 'center', fontFamily: "Montserrat-Regular", color: Colors.primaryText }}>
                            Você ganhou <Text style={{ fontWeight: 'bold' }}>1 mês grátis</Text> de assinatura premium!
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.primaryText, textAlign: 'center', marginBottom: 20, fontFamily: "Montserrat-Regular" }}>
                            Após esse período, caso queira continuar premium, entre em contato com a equipe do TatuNow. 
                            Através do email: <Text style={{ fontWeight: 'bold' }}> tatuNow.suport@gmail.com </Text>
                        </Text>
                        <TouchableOpacity
                            onPress={() => setShowPremiumModal(false)}
                            style={{
                                backgroundColor: Colors.quaternary,
                                paddingHorizontal: 24,
                                paddingVertical: 10,
                                borderRadius: 8
                            }}
                        >
                            <Text style={{ color: Colors.primaryText, fontFamily: "Montserrat-SemiBold" }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}