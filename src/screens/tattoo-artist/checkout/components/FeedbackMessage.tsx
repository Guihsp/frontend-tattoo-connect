import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

const FeedbackMessage = ({ type, message, loading = false }) => {
  const getIconColor = () => {
    switch (type) {
      case 'success':
        return Colors.success;
      case 'error':
        return Colors.error;
      case 'warning':
        return Colors.accent;
      default:
        return Colors.quaternary;
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.quaternary} />
      ) : (
        <View style={[styles.messageContainer, styles[`${type}Container`]]}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
  },
  messageContainer: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  successContainer: {
    backgroundColor: 'rgba(39, 174, 96, 0.2)',
    borderColor: Colors.success,
    borderWidth: 1,
  },
  errorContainer: {
    backgroundColor: 'rgba(231, 76, 60, 0.2)',
    borderColor: Colors.error,
    borderWidth: 1,
  },
  warningContainer: {
    backgroundColor: 'rgba(241, 196, 15, 0.2)',
    borderColor: Colors.accent,
    borderWidth: 1,
  },
  infoContainer: {
    backgroundColor: 'rgba(142, 68, 173, 0.2)',
    borderColor: Colors.quaternary,
    borderWidth: 1,
  },
  messageText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: Colors.primaryText,
    textAlign: 'center',
  },
});

export default FeedbackMessage;
