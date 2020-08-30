import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TabNavigator from './tabNavigation';
import ProductsScreen from '../screens/mainScreens/products';
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
