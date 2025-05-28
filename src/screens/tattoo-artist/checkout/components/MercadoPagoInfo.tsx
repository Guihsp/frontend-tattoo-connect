import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';

const MercadoPagoInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="shield-checkmark" size={24} color={Colors.success} />
        <Text style={styles.headerText}>Pagamento processado por</Text>
      </View>
      
      <View style={styles.logoContainer}>
        <Text style={styles.mercadoText}>Mercado</Text>
        <Text style={styles.pagoText}>Pago</Text>
      </View>
      
      <Text style={styles.securityText}>
        Seus dados estão protegidos com criptografia de ponta a ponta
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.primaryText,
    marginLeft: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  mercadoText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#009EE3', // Cor oficial do Mercado Pago
  },
  pagoText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#8C8C8C', // Cor oficial do Mercado Pago
  },
  securityText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.secondaryText,
    textAlign: 'center',
  },
});

export default MercadoPagoInfo;
