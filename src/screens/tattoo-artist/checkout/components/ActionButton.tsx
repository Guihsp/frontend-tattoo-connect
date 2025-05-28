import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

const ActionButton = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : {}
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.quaternary,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 300,
  },
  buttonDisabled: {
    backgroundColor: Colors.inputBorder,
    opacity: 0.7,
  },
  buttonText: {
    color: Colors.primaryText,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
});

export default ActionButton;
