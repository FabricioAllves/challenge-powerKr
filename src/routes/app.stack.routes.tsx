import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppTabRoutes } from './app.tab.routes';

import { Home } from '~/pages/Home';
import { SignIn } from '~/pages/SignIn';

type Stacks = {
  signIn: undefined;
  Home: undefined;
  Compromissos: undefined;
  Comitês: undefined;
  Perfil: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<Stacks>();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="Home" component={AppTabRoutes} />
    </Navigator>
  );
}
