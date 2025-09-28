import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/fontFamily';
import AppScreenWrapper from '../../AppScreenWrapper';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <AppScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to ChatScreen!</Text>
      </View>
    </AppScreenWrapper>
  );
};

export default ChatScreen;

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
});
