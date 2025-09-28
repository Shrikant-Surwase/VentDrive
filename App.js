import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from './src/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}
