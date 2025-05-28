import React, { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import Colors from '@/src/constants/Colors';
import BackButton from '@/src/components/buttons/BackButton';
import PlanSummary from './components/PlanSummary';
import PaymentForm from './components/PaymentForm';
import TermsAndConditions from './components/TermsAndConditions';
import ActionButton from './components/ActionButton';

const CheckoutScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    cpf: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCardDataChange = (field, value) => {
    setCardData({
      ...cardData,
      [field]: value,
    });
    
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const handleTermsChange = (value) => {
    setTermsAccepted(value);
    if (errors.terms) {
      setErrors({
        ...errors,
        terms: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validação do número do cartão
    if (!cardData.number || cardData.number.replace(/\s/g, '').length !== 16) {
      newErrors.number = 'Número de cartão inválido';
    }
    
    // Validação do nome no cartão
    if (!cardData.name || cardData.name.trim().length < 3) {
      newErrors.name = 'Nome inválido';
    }
    
    // Validação da data de validade
    if (!cardData.expiry || !cardData.expiry.match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiry = 'Data inválida';
    }
    
    // Validação do CVV
    if (!cardData.cvv || cardData.cvv.length < 3) {
      newErrors.cvv = 'CVV inválido';
    }
    
    // Validação do CPF
    if (!cardData.cpf || cardData.cpf.replace(/\D/g, '').length !== 11) {
      newErrors.cpf = 'CPF inválido';
    }
    
    // Validação dos termos
    if (!termsAccepted) {
      newErrors.terms = 'Você precisa aceitar os termos';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubscribe = async () => {
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulação da integração com Mercado Pago
      // Em uma implementação real, aqui seria feita a tokenização do cartão
      // e a chamada à API de assinaturas do Mercado Pago
      
      setTimeout(() => {
        setLoading(false);
        Alert.alert(
          'Assinatura Realizada',
          'Sua assinatura do plano premium foi realizada com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => router.push('/(tattoo-artist)'),
            },
          ]
        );
      }, 2000);
      
      // Código comentado para a implementação real com Mercado Pago:
      /*
      // 1. Tokenizar o cartão
      const cardToken = await mercadopago.createCardToken({
        cardNumber: cardData.number.replace(/\s/g, ''),
        cardholderName: cardData.name,
        cardExpirationMonth: cardData.expiry.split('/')[0],
        cardExpirationYear: `20${cardData.expiry.split('/')[1]}`,
        securityCode: cardData.cvv,
        identificationType: 'CPF',
        identificationNumber: cardData.cpf.replace(/\D/g, ''),
      });
      
      // 2. Criar a assinatura
      const response = await api.post('/subscriptions', {
        preapproval_plan_id: 'PLANO_PREMIUM_ID', // ID do plano criado no Mercado Pago
        reason: 'Plano Premium TattooConnect',
        payer_email: 'email_do_usuario@exemplo.com', // Email do usuário logado
        card_token_id: cardToken.id,
        auto_recurring: {
          frequency: 1,
          frequency_type: 'months',
          transaction_amount: 19.90,
          currency_id: 'BRL',
        },
      });
      
      setLoading(false);
      
      if (response.status === 200 || response.status === 201) {
        Alert.alert(
          'Assinatura Realizada',
          'Sua assinatura do plano premium foi realizada com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => router.push('/(tattoo-artist)'),
            },
          ]
        );
      }
      */
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao processar sua assinatura. Por favor, tente novamente.',
        [{ text: 'OK' }]
      );
      console.error('Erro na assinatura:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => router.back()} />
        <Text style={styles.title}>Assinar Plano Premium</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <PlanSummary />
        
        <PaymentForm 
          cardData={cardData} 
          onChangeCardData={handleCardDataChange} 
          errors={errors}
        />
        
        <TermsAndConditions 
          accepted={termsAccepted} 
          onChangeAccepted={handleTermsChange}
          error={errors.terms}
        />
        
        <View style={styles.actionContainer}>
          <ActionButton 
            title="Assinar Agora" 
            onPress={handleSubscribe} 
            disabled={loading}
          />
          
          {loading && (
            <ActivityIndicator 
              size="large" 
              color={Colors.quaternary} 
              style={styles.loader} 
            />
          )}
          
          <Text style={styles.securityText}>
            Seus dados estão protegidos com criptografia de ponta a ponta
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
