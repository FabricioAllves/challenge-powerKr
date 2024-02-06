import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from 'react-native';
import { TamaguiProvider, YStack } from 'tamagui';

import config from './tamagui.config';

import { Routes } from '~/routes';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <StatusBar barStyle="dark-content" translucent={false} backgroundColor="#121926" />
      <YStack bg="#121926" f={1}>
        <Routes />
      </YStack>
    </TamaguiProvider>
  );
}
