import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { getFontFamily } from '../../utils/fontFamily';
import AppScreenWrapper from '../../AppScreenWrapper';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <AppScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome !</Text>
        <Pressable onPress={() => navigation.navigate('Register')} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Create Account</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')} style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>Sign in</Text>
        </Pressable>
      </View>
    </AppScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: getFontFamily(true, 'semibold'),
    fontWeight: 600,
    fontSize: 36,
    textAlign: 'center',
    marginHorizontal: 50,
  },
  primaryButton: {
    backgroundColor: '#0E7490',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25,
  },
  primaryButtonText: {
    fontFamily: getFontFamily(true, 'semibold'),
    fontWeight: 600,
    fontSize: 16,
    color: 'white',
  },
  outlineButton: {
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#0E7490',
  },
  outlineButtonText: {
    fontFamily: getFontFamily(true, 'semibold'),
    fontWeight: 600,
    fontSize: 16,
    color: '#0E7490',
  },
});
