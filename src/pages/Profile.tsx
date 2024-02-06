import { ChevronRight, HelpCircle, Power } from '@tamagui/lucide-icons';
import React from 'react';
import { H3, YStack, Text, XStack, Switch, ScrollView } from 'tamagui';

import { AvatarProfile } from '~/components/AvatarProfile';
import { Header } from '~/components/Header';
import { Button } from '~/styles/variants/Button';

export function Profile() {
  return (
    <YStack bg="#121926" f={1}>
      <Header eye />
      <ScrollView>
        <YStack f={1} ai="center" paddingHorizontal="$4" bg="#121926" mb="$10">
          <AvatarProfile size="$11" m="$3" />
          <H3>Fabricio Henrique</H3>
          <Text mt="$1.5" color="#9AA4B2">
            Compras
          </Text>

          <XStack ai="center" h="$6" w="100%" jc="space-between">
            <Text>Nome</Text>
            <XStack ai="center">
              <Text color="#9AA4B2">Fabricio Henrique alves</Text>
              <ChevronRight size={20} ml="$3" color="#9AA4B2" />
            </XStack>
          </XStack>

          <XStack ai="center" h="$6" w="100%" jc="space-between">
            <Text>E-mail</Text>
            <XStack ai="center">
              <Text color="#9AA4B2">fabricioteste@gmail.com</Text>
              <ChevronRight size={20} ml="$3" color="#9AA4B2" />
            </XStack>
          </XStack>

          <XStack ai="center" h="$6" w="100%" jc="space-between">
            <Text>Alterar senha</Text>
            <XStack ai="center">
              <ChevronRight size={20} ml="$3" color="#9AA4B2" />
            </XStack>
          </XStack>

          <XStack ai="center" h="$6" w="100%" jc="space-between">
            <Text>Notificações</Text>
            <XStack ai="center">
              <Switch size="$2">
                <Switch.Thumb animation="bouncy" />
              </Switch>
            </XStack>
          </XStack>

          <XStack ai="center" h="$6" w="100%" jc="space-between">
            <Text>Modo Noturno</Text>
            <XStack ai="center">
              <Switch size="$2">
                <Switch.Thumb animation="bouncy" />
              </Switch>
            </XStack>
          </XStack>

          <Button buttonSelection="buttonHelpProfile">
            <HelpCircle size={20} ml="$3" />
            <Text>Ajuda</Text>
          </Button>

          <Button buttonSelection="buttonHelpProfile" mt="$2">
            <Power size={20} ml="$3" />
            <Text>Sair</Text>
          </Button>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
