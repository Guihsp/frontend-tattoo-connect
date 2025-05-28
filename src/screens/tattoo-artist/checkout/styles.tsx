import { StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primaryText,
    marginLeft: 15,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    gap: 30,
  },
  actionContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  loader: {
    marginTop: 20,
  },
  securityText: {
    marginTop: 15,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.secondaryText,
    textAlign: 'center',
  },
});
