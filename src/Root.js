import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingScreen from './LandingScreen';
import ProfileScreen from './features/HomeDashBoard/ProfileScreen';
import MapScreen from './features/Map';
import Login from './features/Login';
import HomeScreen from './features/HomeScreen';
import Register from './features/Register';
import BottomBarNavigation from './features/BottomBarNavigation';
import HomeDashBoard from './features/HomeDashBoard';

const Stack = createStackNavigator();

function Root() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        setIsLoggedIn(value === 'true');
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0E7490" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <>
          <Stack.Screen name="BottomBarNavigation" component={BottomBarNavigation} />
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="HomeDashBoard" component={HomeDashBoard} />
        </>
      ) : (
        <>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="BottomBarNavigation" component={BottomBarNavigation} />
        </>
      )}
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default Root;
