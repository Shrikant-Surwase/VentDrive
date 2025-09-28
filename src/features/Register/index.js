import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'react-native-feather';
import { getFontFamily } from '../../utils/fontFamily';
import AppScreenWrapper from '../../AppScreenWrapper';

const Register = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).+$/;
    return passwordRegex.test(password);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleRegister = async () => {
    if (!fullName || !email || !mobile || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (fullName.length < 3) {
      Alert.alert('Error', 'Full name must be at least 3 characters.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid Gmail address.');
      return;
    }

    if (!validateMobile(mobile)) {
      Alert.alert('Error', 'Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Error',
        'Password must contain uppercase, lowercase, number, and special character.',
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const userData = {
        fullName,
        email,
        mobile,
        password,
      };

      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      await AsyncStorage.setItem('isLoggedIn', 'true');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    } catch (error) {
      console.log('AsyncStorage error: ', error);
    }
  };

  return (
    <AppScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Create Account</Text>

        {/* Full Name */}
        <View style={styles.outlineButton}>
          <User stroke="white" fill="#00000066" width={24} height={24} strokeWidth={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Email */}
        <View style={styles.outlineButton}>
          <Mail stroke="white" fill="#00000066" width={24} height={24} strokeWidth={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Mobile */}
        <View style={styles.outlineButton}>
          <Phone stroke="white" fill="#00000066" width={24} height={24} strokeWidth={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        {/* Password */}
        <View style={styles.outlineButton}>
          <Lock stroke="white" fill="#00000066" width={24} height={24} strokeWidth={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff width={24} height={24} strokeWidth={1} />
            ) : (
              <Eye width={24} height={24} strokeWidth={1} />
            )}
          </Pressable>
        </View>

        {/* Confirm Password */}
        <View style={styles.outlineButton}>
          <Lock stroke="white" fill="#00000066" width={24} height={24} strokeWidth={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
          />
        </View>

        <Pressable onPress={handleRegister} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Register</Text>
        </Pressable>
      </ScrollView>
    </AppScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  headerText: {
    fontFamily: getFontFamily(true, 'semibold'),
    fontWeight: '600',
    fontSize: 32,
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
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
    marginTop: 15,
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
