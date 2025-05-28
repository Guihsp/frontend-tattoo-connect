import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

const PaymentForm = ({ cardData, onChangeCardData, errors }) => {
  // Formatação do número do cartão (adiciona espaços a cada 4 dígitos)
  const formatCardNumber = (text) => {
    const cleaned = text.replace(/\s/g, '');
    const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
    return formatted.substring(0, 19); // Limita a 16 dígitos + 3 espaços
  };

  // Formatação da data de validade (MM/AA)
  const formatExpiry = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 3) {
      return `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
    } else if (cleaned.length === 2) {
      return `${cleaned}/`;
    }
    return cleaned;
  };

  // Formatação do CPF (XXX.XXX.XXX-XX)
  const formatCPF = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 10) {
      return `${cleaned.substring(0, 3)}.${cleaned.substring(3, 6)}.${cleaned.substring(6, 9)}-${cleaned.substring(9, 11)}`;
    } else if (cleaned.length >= 7) {
      return `${cleaned.substring(0, 3)}.${cleaned.substring(3, 6)}.${cleaned.substring(6)}`;
    } else if (cleaned.length >= 4) {
      return `${cleaned.substring(0, 3)}.${cleaned.substring(3)}`;
    }
    return cleaned;
  };

  const handleCardNumberChange = (text) => {
    const formatted = formatCardNumber(text);
    onChangeCardData('number', formatted);
  };

  const handleExpiryChange = (text) => {
    const formatted = formatExpiry(text);
    onChangeCardData('expiry', formatted);
  };

  const handleCPFChange = (text) => {
    const formatted = formatCPF(text);
    onChangeCardData('cpf', formatted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Dados de Pagamento</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Número do Cartão</Text>
        <TextInput
          style={[styles.input, errors.number && styles.inputError]}
          placeholder="0000 0000 0000 0000"
          placeholderTextColor={Colors.inputBorder}
          value={cardData.number}
          onChangeText={handleCardNumberChange}
          keyboardType="numeric"
          maxLength={19}
        />
        {errors.number && <Text style={styles.errorText}>{errors.number}</Text>}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome no Cartão</Text>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          placeholder="Como aparece no cartão"
          placeholderTextColor={Colors.inputBorder}
          value={cardData.name}
          onChangeText={(text) => onChangeCardData('name', text)}
          autoCapitalize="characters"
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      </View>

      <View style={styles.rowContainer}>
        <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
          <Text style={styles.label}>Validade</Text>
          <TextInput
            style={[styles.input, errors.expiry && styles.inputError]}
            placeholder="MM/AA"
            placeholderTextColor={Colors.inputBorder}
            value={cardData.expiry}
            onChangeText={handleExpiryChange}
            keyboardType="numeric"
            maxLength={5}
          />
          {errors.expiry && <Text style={styles.errorText}>{errors.expiry}</Text>}
        </View>

        <View style={[styles.formGroup, { flex: 1 }]}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={[styles.input, errors.cvv && styles.inputError]}
            placeholder="123"
            placeholderTextColor={Colors.inputBorder}
            value={cardData.cvv}
            onChangeText={(text) => onChangeCardData('cvv', text.replace(/\D/g, '').substring(0, 4))}
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
          />
          {errors.cvv && <Text style={styles.errorText}>{errors.cvv}</Text>}
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>CPF do Titular</Text>
        <TextInput
          style={[styles.input, errors.cpf && styles.inputError]}
          placeholder="000.000.000-00"
          placeholderTextColor={Colors.inputBorder}
          value={cardData.cpf}
          onChangeText={handleCPFChange}
          keyboardType="numeric"
          maxLength={14}
        />
        {errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primaryText,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.primaryText,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 50,
    backgroundColor: Colors.inputBackground,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.inputBorder,
    color: Colors.primaryText,
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.error,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PaymentForm;
