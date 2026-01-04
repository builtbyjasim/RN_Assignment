import { StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import { COLOR, SCREEN } from '../../../misc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/navigation';
import { logger } from '../../../utils';

const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const _handleRoute = () => {
    try {
      navigation.replace(SCREEN.home);
    } catch (error) {
      logger.log('_handleRoute error : ', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      _handleRoute();
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>RN_Assignment</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLOR.background,
    fontSize: 16,
  },
});
