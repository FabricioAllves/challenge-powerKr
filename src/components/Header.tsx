import { H4, YStack } from 'tamagui';

import { Button } from '../styles/variants/Button';

type PropsHeader = {
  eye: boolean;
};

export const Header = ({ eye = false }: PropsHeader) => {
  return (
    <YStack flexDirection="row" ai="center" jc="space-between" h="$5">
      <Button headerButtons="buttonMenu" />
      {eye && (
        <H4 position="absolute" left="43%">
          perfil
        </H4>
      )}

      {!eye && <Button headerButtons="buttonNotify" />}
    </YStack>
  );
};
