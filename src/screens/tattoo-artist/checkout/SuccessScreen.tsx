import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>✓</Text>
      </View>
      
      <Text style={styles.title}>Assinatura Confirmada!</Text>
      
      <Text style={styles.description}>
        Sua assinatura do Plano Premium TattooConnect foi realizada com sucesso. 
        Agora você tem acesso a todos os recursos exclusivos da plataforma.
      </Text>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Plano:</Text>
          <Text style={styles.detailValue}>Premium TattooConnect</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Valor:</Text>
          <Text style={styles.detailValue}>R$ 19,90/mês</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Próxima cobrança:</Text>
          <Text style={styles.detailValue}>28/06/2025</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Método:</Text>
          <Text style={styles.detailValue}>Cartão de crédito</Text>
        </View>
      </View>
      
      <Text style={styles.supportText}>
        Você receberá um e-mail com os detalhes da sua assinatura.
        Em caso de dúvidas, entre em contato com nosso suporte.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 40,
    color: Colors.primaryText,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primaryText,
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.primaryText,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  detailsContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.secondaryText,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: Colors.primaryText,
  },
  supportText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.secondaryText,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default SuccessScreen;
