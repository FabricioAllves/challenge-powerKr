import { YStack } from 'tamagui';
import { Button } from './Button';

export const Header = () => {
  return (
    <YStack flexDirection="row" ai="center" jc="space-between" h="$5">
      <Button buttonType="buttonMenu" />
      <Button buttonType="buttonSearch" />
    </YStack>
  );
};
