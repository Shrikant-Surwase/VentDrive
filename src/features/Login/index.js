import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert, Keyboard } from 'react-native';
import { getFontFamily } from '../../utils/fontFamily';
import AppScreenWrapper from '../../AppScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { Mail, Lock, Eye, EyeOff } from 'react-native-feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    Keyboard.dismiss(); 
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      const storedUser = await AsyncStorage.getItem('userData');
      if (!storedUser) {
        Alert.alert('Error', 'No user found. Please register first.');
        return;
      }

      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.email === email && parsedUser.password === password) {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        });
      } else {
        Alert.alert('Error', 'Invalid email or password.');
      }
    } catch (error) {
      console.log('AsyncStorage error: ', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <AppScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome back !</Text>

        <View style={styles.outlineButton}>
          <Mail stroke="white" fill="#00000066" width={24} height={24} strokeWidth={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </View>

        <View style={styles.outlineButton}>
          <Lock stroke="white" fill="#00000066" width={24} height={24} strokeWidth={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            onSubmitEditing={handleLogin}
            returnKeyType="done"
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff width={24} height={24} strokeWidth={1} />
            ) : (
              <Eye width={24} height={24} strokeWidth={1} />
            )}
          </Pressable>
        </View>

        <Pressable onPress={handleLogin} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign in</Text>
        </Pressable>
        <Text style={{ textAlign: 'center', marginTop: 40 }}>Don't have an account?</Text>
        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={[styles.primaryButton, { marginTop: 20 }]}
        >
          <Text style={styles.primaryButtonText}>Sign up</Text>
        </Pressable>
      </View>
    </AppScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: getFontFamily(true, 'semibold'),
    fontWeight: '600',
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
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  outlineButton: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#0E7490',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textInput: {
    flex: 1,
    fontFamily: getFontFamily(true, 'regular'),
    fontSize: 16,
    color: '#000000',
  },
});
