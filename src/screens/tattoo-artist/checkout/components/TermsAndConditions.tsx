import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/src/constants/Colors';

const TermsAndConditions = ({ accepted, onChangeAccepted, error }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.checkboxContainer} 
        onPress={() => onChangeAccepted(!accepted)}
        activeOpacity={0.7}
      >
        <View style={[
          styles.checkbox, 
          accepted ? styles.checkboxChecked : {}
        ]}>
          {accepted && <Ionicons name="checkmark" size={18} color={Colors.primaryText} />}
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.termsText}>
            Li e concordo com os{' '}
            <Text style={styles.linkText}>Termos de Uso</Text> e{' '}
            <Text style={styles.linkText}>Política de Privacidade</Text>
          </Text>
        </View>
      </TouchableOpacity>
      
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.inputBorder,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.quaternary,
    borderColor: Colors.quaternary,
  },
  textContainer: {
    flex: 1,
  },
  termsText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.primaryText,
    lineHeight: 20,
  },
  linkText: {
    color: Colors.quaternary,
    fontFamily: 'Montserrat-SemiBold',
    textDecorationLine: 'underline',
  },
  errorText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.error,
    marginTop: 5,
    marginLeft: 34,
  },
});

export default TermsAndConditions;
