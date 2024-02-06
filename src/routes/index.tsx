import { NavigationContainer } from '@react-navigation/native';
import { YStack } from 'tamagui';

import { StackRoutes } from './app.stack.routes';

export function Routes() {
  return (
    <YStack f={1} bg="#000">
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </YStack>
  );
}
