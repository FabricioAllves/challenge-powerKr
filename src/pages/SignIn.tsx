import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { YStack, Image, H2, Paragraph, Input, Label, Text } from 'tamagui';

import img from '../assets/background.png';
import Logo from '../assets/logo.png';
import subLogo from '../assets/subLogos.png';

import { AppNavigatorRoutesProps } from '~/routes/app.tab.routes';
import { Button } from '~/styles/variants/Button';

export const SignIn = () => {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  return (
    <YStack f={1} bg="#000">
      <ImageBackground source={img} resizeMode="cover" style={{ flex: 1, alignItems: 'center' }}>
        <YStack f={1} w="100%" paddingHorizontal="$5">
          <YStack mt="$1" ai="center">
            <Image src={Logo} mt="$10" />
            <Image src={subLogo} mt="$5" />
          </YStack>

          <YStack position="absolute" bottom={20} left={20}>
            <H2 fontWeight="bold" mb="$2">
              Bem-vindo de volta!
            </H2>
            <Paragraph>Preparado para mais uma jornada?</Paragraph>
          </YStack>
        </YStack>

        <YStack bg="#182e43" p="$5" w="100%" borderTopRightRadius="$9" borderTopLeftRadius="$9">
          <Label htmlFor="name1">Informações da conta</Label>
          <Input id="userId" placeholder="Insira seu e-mail" bg="#364152" borderColor="#4b5565" />
          <Label htmlFor="name">Senha</Label>
          <Input
            id="password"
            placeholder="Senha"
            bg="#364152"
            borderColor="#4b5565"
            secureTextEntry
          />

          <Text marginVertical="$4" color="#f7b519" textAlign="right">
            Esqueceu a senha?
          </Text>

          <Button bg="#f7b519" w="100%" fontWeight="bold" onPress={() => navigate('Home')}>
            Entrar
          </Button>
        </YStack>
      </ImageBackground>
    </YStack>
  );
};
