import React from 'react';
import { XStack, YStack, Text } from 'tamagui';

import { Button } from '~/components/Button';
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

        <XStack ai="center" jc="space-between" mt="$5">
          <Button buttonType="buttonOption">Pessoal</Button>
          <Button buttonType="buttonOption">Geral</Button>
        </XStack>
      </YStack>
    </YStack>
  );
}
