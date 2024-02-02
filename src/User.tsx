import React from 'react';
import { Avatar, Text, XStack, YStack, H4 } from 'tamagui';

export function User() {
  return (
    <XStack gap="$2" ai="center">
      <Avatar size="$5" circular>
        <Avatar.Image src="https://github.com/FabricioAllves.png" />

        <Avatar.Fallback backgroundColor="$gray5" />
      </Avatar>

      <YStack>
        <Text color="$token.teste">Olá</Text>

        <H4 fontWeight="bold" color="$background" mt="$-2">
          Fabricio
        </H4>
      </YStack>
    </XStack>
  );
}
