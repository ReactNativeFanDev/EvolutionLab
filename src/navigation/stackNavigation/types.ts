import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Routes {
  GrowthMapScreen = 'GrowthMapScreen',
}

export type RootStackParamList = {
  [Routes.GrowthMapScreen]: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
