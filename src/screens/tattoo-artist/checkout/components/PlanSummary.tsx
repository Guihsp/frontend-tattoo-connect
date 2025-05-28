import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';

const PlanSummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.planName}>Plano Premium TattooConnect</Text>
        <Text style={styles.planPrice}>R$ 19,90<Text style={styles.period}>/mês</Text></Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.benefitsContainer}>
        <Text style={styles.benefitsTitle}>Benefícios inclusos:</Text>
        
        <View style={styles.benefitItem}>
          <Ionicons name="checkmark-circle" size={24} color={Colors.success} />
          <Text style={styles.benefitText}>Perfil destacado na plataforma</Text>
        </View>
        
        <View style={styles.benefitItem}>
          <Ionicons name="checkmark-circle" size={24} color={Colors.success} />
          <Text style={styles.benefitText}>Acesso a estatísticas avançadas</Text>
        </View>
        
        <View style={styles.benefitItem}>
          <Ionicons name="checkmark-circle" size={24} color={Colors.success} />
          <Text style={styles.benefitText}>Portfólio ilimitado</Text>
        </View>
        
        <View style={styles.benefitItem}>
          <Ionicons name="checkmark-circle" size={24} color={Colors.success} />
          <Text style={styles.benefitText}>Suporte prioritário</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    padding: 20,
    width: '100%',
  },
  headerContainer: {
    marginBottom: 15,
  },
  planName: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primaryText,
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: Colors.quaternary,
  },
  period: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.secondaryText,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.inputBorder,
    marginVertical: 15,
  },
  benefitsContainer: {
    gap: 12,
  },
  benefitsTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primaryText,
    marginBottom: 5,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  benefitText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.primaryText,
    flex: 1,
  },
});

export default PlanSummary;
