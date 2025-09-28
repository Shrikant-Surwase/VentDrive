import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppScreenWrapper from './AppScreenWrapper';
import { getFontFamily } from './utils/fontFamily';

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <AppScreenWrapper>
      <View>
        <Image source={require('./assets/logo.png')} style={styles.image} resizeMode="contain" />
        <Text
          style={{
            fontFamily: getFontFamily(true, 'semibold'),
            fontWeight: 600,
            fontSize: 24,
            marginHorizontal: 50,
          }}
        >
          Rent cars for any occasion
        </Text>
        <Pressable
          onPress={() => console.log('rent pressed')}
          style={{
            backgroundColor: '#0E7490',
            padding: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontFamily: getFontFamily(true, 'semibold'),
              fontWeight: 600,
              fontSize: 16,
              color: 'white',
            }}
          >
            Rent a Car
          </Text>
        </Pressable>
        <Pressable
          onPress={() => console.log('host pressed')}
          style={{
            padding: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 20,
            borderWidth: 1,
            borderColor: '#0E7490',
          }}
        >
          <Text
            style={{
              fontFamily: getFontFamily(true, 'semibold'),
              fontWeight: 600,
              fontSize: 16,
              color: '#0E7490',
            }}
          >
            Become a host
          </Text>
        </Pressable>
      </View>
    </AppScreenWrapper>
  );
};
export default LandingScreen;

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  image: {
    width: 412,
    height: 412,
  },
});
