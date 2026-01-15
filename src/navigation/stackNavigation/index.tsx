import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackNavigationScreenOptions } from './screenOptions';
import { RootStackParamList, Routes } from './types';
import { GrowthMapScreen } from '@screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <Stack.Navigator
      id="stackNavigation"
      screenOptions={stackNavigationScreenOptions}
    >
      <Stack.Screen name={Routes.GrowthMapScreen} component={GrowthMapScreen} />
    </Stack.Navigator>
  );
}
