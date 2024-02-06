import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  Home as HomeIcon,
  AlignStartHorizontal,
  MessageCircleMore,
  CircleUserRound,
} from '@tamagui/lucide-icons';
import { YStack } from 'tamagui';

import { Home } from '~/pages/Home';
import { Profile } from '~/pages/Profile';

type Tabs = {
  Home: undefined;
  Compromissos: undefined;
  Comitês: undefined;
  Perfil: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<Tabs>;

const { Screen, Navigator } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <YStack f={1} bg="#121926">
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#8f8483',
          tabBarStyle: {
            backgroundColor: '#112439',
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 0,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: 60,
          },
        }}>
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => <HomeIcon color={color} />,
          }}
        />

        <Screen
          name="Compromissos"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => <AlignStartHorizontal color={color} />,
          }}
        />

        <Screen
          name="Comitês"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => <MessageCircleMore color={color} />,
          }}
        />

        <Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => <CircleUserRound color={color} />,
          }}
        />
      </Navigator>
    </YStack>
  );
}
