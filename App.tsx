import { useFonts } from 'expo-font';
import React from 'react';
import { TamaguiProvider, YStack } from 'tamagui';

import config from './tamagui.config';

import { Button } from '~/Button';
import { User } from '~/User';

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
      <YStack bg="$background1" f={1} p="$6" pt="$8">
        <User />
        <Button background="normal" />
      </YStack>
    </TamaguiProvider>
  );
}
