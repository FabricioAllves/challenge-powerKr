import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from 'react-native';
import { TamaguiProvider, YStack } from 'tamagui';

import config from './tamagui.config';

import { Button } from '~/components/Button';
import { User } from '~/User';
import { Header } from '~/components/Header';
import { Home } from '~/pages/Home';

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
      <StatusBar barStyle="dark-content" translucent={false} backgroundColor="#262738" />
      <YStack bg="#121926" f={1}>
        <Home />
      </YStack>
    </TamaguiProvider>
  );
}
