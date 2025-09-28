import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

function ProfileScreen() {
  const width = useSharedValue(100);
  const navigation = useNavigation();
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button title="click" onPress={handlePress} />
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}
export default ProfileScreen;
