import {
  PieChart,
  CircleUserRound,
  MessageCircleMore,
  Calendar,
  ChevronUp,
} from '@tamagui/lucide-icons';
import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { XStack, YStack, Text, H6, H1 } from 'tamagui';

import { AvatarProfile } from '~/components/AvatarProfile';
import { CircularProgress } from '~/components/CircleMetric';
import { Header } from '~/components/Header';
import { SelectOptions } from '~/components/SelectOptions';
import { Button } from '~/styles/variants/Button';

export function Home() {
  return (
    <YStack>
      <Header eye={false} />

      <YStack px="$3.5" pt="$1">
        <XStack ai="center" jc="space-between">
          <H1 color="$white" fontSize="$7">
            Olá, Fabricio
          </H1>
          <SelectOptions />
        </XStack>

        <XStack ai="center" jc="space-between" mt="$5">
          <Button buttonSelection="buttonOption" icon={CircleUserRound}>
            Pessoal
          </Button>
          <Button buttonSelection="buttonOption" icon={PieChart} bg="#121926" bw={0}>
            Geral
          </Button>
        </XStack>

        <Button buttonsNavigator="buttonProfile" mt="$4" p={0}>
          <XStack f={1} ai="center" pl="$4">
            <AvatarProfile size="$8" />

            <YStack ml="$3">
              <Text fontSize={17} fontWeight="bold">
                Fabricio Henrique
              </Text>
              <Text color="#9AA4B2">PowerKr</Text>
            </YStack>
          </XStack>
        </Button>

        <Text mt="$4" color="#9AA4B2">
          Compromissos homologados
        </Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={['1', '2', '3', '4']}
          renderItem={({ item }) => (
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
          )}
          contentContainerStyle={{
            paddingRight: 22,
          }}
          style={{
            width: Dimensions.get('screen').width,
            paddingLeft: 20,
            marginLeft: -17,
          }}
        />

        <Text mt="$4" color="#9AA4B2">
          Métricas
        </Text>

        <YStack mt="$2">
          <FlatList
            data={['1', '2', '3', '4', '5', '6', '8', '9', '10']}
            renderItem={({ item }) => (
              <Button buttonsNavigator="buttonMetrics">
                <CircularProgress size={100} strokeWidth={10} progress={70} />
              </Button>
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
          />
        </YStack>
      </YStack>
    </YStack>
  );
}
