import React from 'react';
import { XStack, YStack, Text } from 'tamagui';

import { Header } from '~/components/Header';
import { SelectOptions } from '~/components/SelectOptions';

export function Home() {
  return (
    <YStack f={1}>
      <Header />

      <YStack px="$3.5" pt="$3">
        <XStack ai="center" jc="space-between">
          <Text color="$white" fontSize="$7">
            Olá, Fabricio
          </Text>

          <SelectOptions />
        </XStack>
      </YStack>
    </YStack>
  );
}
