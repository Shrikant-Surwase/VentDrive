// AppScreenWrapper.js
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const AppScreenWrapper = ({ children, barStyle = 'dark-content' }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle} hidden={false} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default AppScreenWrapper;
