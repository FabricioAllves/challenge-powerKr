import { Calendar, ChevronUp, MessageCircleMore } from '@tamagui/lucide-icons';
import React from 'react';
import { H6, XStack, YStack, Text } from 'tamagui';

import { Button } from '~/styles/variants/Button';

export function ButtonApprovedCommitments() {
  return (
    <Button buttonsNavigator="buttonForList" mt="$3">
      <YStack gap="$4">
        <H6>Compromisso Titulo loreem{'\n'}ipsum dolor sit...</H6>

        <XStack fd="row" justifyContent="space-between" ai="center">
          <MessageCircleMore size={16} color="#F7B519" />
          <XStack ai="center" gap="$1.5">
            <Calendar size={16} color="#9AA4B2" />
            <Text color="#9AA4B2">25 Out</Text>
          </XStack>

          <XStack
            ai="center"
            gap="$1.5"
            bg="#F1FEEB"
            br={40}
            paddingHorizontal={5}
            paddingVertical={1}>
            <ChevronUp size={16} color="#1D8935" />
            <Text color="#1D8935">High</Text>
          </XStack>
        </XStack>
      </YStack>
    </Button>
  );
}
