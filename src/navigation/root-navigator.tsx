import React from 'react';
import { RootStackParamList } from '../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SCREEN } from '../misc';
import { HomeScreen, SplashScreen } from '../presentation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'ios_from_right' }}
      >
        <Stack.Screen name={SCREEN.splash} component={SplashScreen} />
        <Stack.Screen name={SCREEN.home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
