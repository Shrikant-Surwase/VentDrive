import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LandingScreen from './LandingScreen';
import ProfileScreen from './features/Profile';
import MapScreen from './features/Map';


function Home() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LandingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
    
  );
}

export default Home;
