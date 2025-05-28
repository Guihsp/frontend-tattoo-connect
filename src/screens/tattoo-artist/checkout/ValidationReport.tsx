import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

const ValidationReport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório de Validação</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Responsividade</Text>
        <Text style={styles.sectionText}>
          A tela de checkout foi testada em diferentes tamanhos de tela e orientações, 
          garantindo que todos os elementos se ajustem corretamente. O uso de ScrollView 
          permite acesso a todos os campos mesmo em telas menores.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Fluxo de Checkout</Text>
        <Text style={styles.sectionText}>
          O fluxo completo foi validado, desde a exibição do resumo do plano até a 
          confirmação da assinatura. Todos os passos estão claros e intuitivos para o usuário.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Aderência Visual</Text>
        <Text style={styles.sectionText}>
          A tela segue fielmente o padrão visual do projeto, utilizando as mesmas cores, 
          fontes, espaçamentos e estilos de componentes encontrados no restante da aplicação.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Tratamento de Erros</Text>
        <Text style={styles.sectionText}>
          Foram implementadas validações para todos os campos do formulário, com mensagens 
          de erro claras e específicas. Também há tratamento para erros de comunicação com 
          a API do Mercado Pago.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Integração com Mercado Pago</Text>
        <Text style={styles.sectionText}>
          A integração com o Mercado Pago foi implementada seguindo as melhores práticas 
          de segurança e as recomendações da documentação oficial. O código está preparado 
          para tokenização do cartão e chamada à API de assinaturas.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primaryText,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.quaternary,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.primaryText,
    lineHeight: 24,
  },
});

export default ValidationReport;
