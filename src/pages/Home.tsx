import { useNavigation } from '@react-navigation/native';
import { PieChart, CircleUserRound } from '@tamagui/lucide-icons';
import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { XStack, YStack, Text, H1 } from 'tamagui';

import { AvatarProfile } from '~/components/AvatarProfile';
import { ButtonApprovedCommitments } from '~/components/ButtonApprovedCommitments';
import { CircularProgress } from '~/components/CircleMetric';
import { Header } from '~/components/Header';
import { SelectOptions } from '~/components/Select';
import { AppNavigatorRoutesProps } from '~/routes/app.tab.routes';
import { Button } from '~/styles/variants/Button';

export function Home() {
  const {navigate }= useNavigation<AppNavigatorRoutesProps>();

  return (
    <YStack bg="#121926" f={1}>
      <Header eye={false} />

      <YStack f={1}>
        <XStack px="$3.5" ai="center" jc="space-between">
          <H1 color="$white" fontSize="$7">
            Olá, Fabricio
          </H1>
          <SelectOptions />
        </XStack>

        <XStack px="$3.5" pt="$1" ai="center" jc="space-between" mt="$5" mb="$4">
          <Button buttonSelection="buttonOption" icon={CircleUserRound}>
            Pessoal
          </Button>
          <Button buttonSelection="buttonOption" icon={PieChart} bg="#121926" bw={0}>
            Geral
          </Button>
        </XStack>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={['1']}
          renderItem={({ item }) => (
            <>
              <YStack px="$3.5" pt="$1">
                <Button
                  buttonsNavigator="buttonProfile"
                  mt="$4"
                  p={0}
                  onPress={() => navigate('Perfil')}>
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
              </YStack>

              <YStack>
                <Text px="$3.5" pt="$1" mt="$4" color="#9AA4B2">
                  Compromissos homologados
                </Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={['1', '2', '3', '4']}
                  renderItem={({ item }) => <ButtonApprovedCommitments />}
                  contentContainerStyle={{
                    paddingRight: 22,
                  }}
                  style={{
                    width: Dimensions.get('screen').width,
                    paddingLeft: 20,
                  }}
                />
              </YStack>

              <YStack px="$3.5" pt="$1">
                <Text mt="$4" mb="$3" color="#9AA4B2">
                  Métricas
                </Text>
                <FlatList
                  data={['1', '2', '3', '4', '5', '6', '8']}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <Button buttonsNavigator="buttonMetrics">
                      <CircularProgress size={100} strokeWidth={10} progress={80} />
                    </Button>
                  )}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  numColumns={2}
                />
              </YStack>
            </>
          )}
        />
      </YStack>
    </YStack>
  );
}
